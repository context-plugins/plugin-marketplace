import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MonitorType = {
  Status: "status",
  ExpectedStatusCode: "expected_status_code",
  Keyword: "keyword",
  KeywordAbsence: "keyword_absence",
  Ping: "ping",
  Tcp: "tcp",
  Udp: "udp",
  Smtp: "smtp",
  Pop: "pop",
  Imap: "imap",
  Dns: "dns",
  Playwright: "playwright",
} as const;
export type MonitorType = (typeof MonitorType)[keyof typeof MonitorType] | (string & {});

export const monitorTypeSchema: EnumSchema<MonitorType> = s.enumOf<MonitorType>(MonitorType);
