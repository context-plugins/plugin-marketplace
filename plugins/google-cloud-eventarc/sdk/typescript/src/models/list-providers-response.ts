import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";

/** The response message for the `ListProviders` method. */
export type ListProvidersResponse = {
  /** The requested providers, up to the number specified in `page_size`. */
  providers?: Provider[];
  /**
   * A page token that can be sent to `ListProviders` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listProvidersResponseSchema: Schema<ListProvidersResponse> = s.object<ListProvidersResponse>(
  {
    providers: s.optional(s.array(s.lazy(() => providerSchema))),
    nextPageToken: s.optional(s.string()),
    unreachable: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
