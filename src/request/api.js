/*
 * api接口统一管理
 */
import { get } from './http'

const basePath = '/api/v2/music'

export const recommend = get(basePath + '/recommend')

export const toplist = get(basePath + '/toplist')
