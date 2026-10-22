import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Data Export destination */
export const Kind6 = {
  GooglePubsub: "google-pubsub",
  Kinesis: "kinesis",
  Mparticle: "mparticle",
  Segment: "segment",
  AzureEventHubs: "azure-event-hubs",
  SnowflakeV2: "snowflake-v2",
  Databricks: "databricks",
  Bigquery: "bigquery",
  Redshift: "redshift",
} as const;
export type Kind6 = (typeof Kind6)[keyof typeof Kind6] | (string & {});

export const kind6Schema: EnumSchema<Kind6> = s.enumOf<Kind6>(Kind6);
