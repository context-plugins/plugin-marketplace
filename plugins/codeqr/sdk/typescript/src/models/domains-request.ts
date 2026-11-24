import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type, typeSchema } from "./type.js";

export type DomainsRequest = {
  /** Name of the domain. */
  slug: string;
  /** The target URL to redirect to when accessing the domain root. */
  target?: string | null;
  /** The behavior type for the domain root redirect. @default Type.Redirect */
  type?: Type;
  /** Redirect users to a specific URL when any link under this domain has expired. */
  expiredUrl?: string | null;
  /**
   * Whether to archive this domain. `false` will unarchive a previously archived domain.
   *
   * @default false
   */
  archived?: boolean;
  /**
   * Provide context to your teammates in the link creation modal by showing them an example of a
   * link to be shortened.
   *
   * @default "https://codeqr.io/help/article/what-is-codeqr"
   */
  placeholder?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const domainsRequestProperties: s.Shape<DomainsRequest> = {
  slug: s.string(),
  target: s.optionalNullable(s.string()),
  type: s.defaulted(typeSchema, Type.Redirect),
  expiredUrl: s.optionalNullable(s.string()),
  archived: s.defaulted(s.boolean(), false),
  placeholder: s.defaulted(s.nullable(s.string()), "https://codeqr.io/help/article/what-is-codeqr"),
};

export const domainsRequestInternalSchema: Schema<DomainsRequest> = s.object<DomainsRequest>(
  domainsRequestProperties,
  { additionalProperties: s.json() },
);

export const domainsRequestSchema: Schema<DomainsRequest> = s.lazySchema(() =>
  s.object<DomainsRequest>(
    {
      ...domainsRequestProperties,
      slug: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
