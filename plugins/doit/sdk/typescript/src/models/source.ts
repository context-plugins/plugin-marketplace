import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ChannelDoiTSignupApi, channelDoiTSignupApiSchema } from "./channel-doi-tsignup-api.js";

/** Attribution. channel defaults to agent; console and web are the human channels. */
export type Source = {
  /** @default ChannelDoiTSignupApi.Agent */
  channel?: ChannelDoiTSignupApi;
  /** Name and version of the calling agent (agent channel). */
  agentClient?: string;
  campaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sourceProperties: s.Shape<Source> = {
  channel: s.defaulted(channelDoiTSignupApiSchema, ChannelDoiTSignupApi.Agent),
  agentClient: s.optional(s.string()),
  campaign: s.optional(s.string()),
  utmSource: s.optional(s.string()),
  utmMedium: s.optional(s.string()),
  utmCampaign: s.optional(s.string()),
};

export const sourceInternalSchema: Schema<Source> = s.object<Source>(sourceProperties, {
  additionalProperties: s.json(),
});

export const sourceSchema: Schema<Source> = s.lazySchema(() =>
  s.object<Source>(
    {
      ...sourceProperties,
      agentClient: s.optional(s.string().check(s.maxLength(120))),
      campaign: s.optional(s.string().check(s.maxLength(120))),
      utmSource: s.optional(s.string().check(s.maxLength(120))),
      utmMedium: s.optional(s.string().check(s.maxLength(120))),
      utmCampaign: s.optional(s.string().check(s.maxLength(120))),
    },
    { additionalProperties: s.json() },
  ),
);
