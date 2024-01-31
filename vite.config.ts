// vite.config.ts
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from "vite-plugin-mock";
 
export default ({ command, mode }: ConfigEnv): UserConfig => {
  
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        supportTs: false,
        logger: false,
        mockPath: "./src/mock/"
      })
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
          '/api': {
              target: loadEnv(mode, process.cwd()).VITE_PROXYURL,
              changeOrigin: false,
              rewrite: path => path.replace(/^\/api/, ''),
          }
      }
  },
  }
}