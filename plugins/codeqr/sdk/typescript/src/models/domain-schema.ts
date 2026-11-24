import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type, typeSchema } from "./type.js";

export type DomainSchema = {
  /** The unique identifier of the domain. */
  id: string;
  /** The domain name. */
  slug: string;
  /** Whether the domain is verified. @default false */
  verified?: boolean;
  /** Whether the domain is the primary domain for the project. @default false */
  primary?: boolean;
  /** Whether the domain is archived. @default false */
  archived?: boolean;
  /** The target URL to redirect to when accessing the domain root. */
  target: string | null;
  /** The behavior type for the domain root redirect. @default Type.Redirect */
  type?: Type;
  /**
   * Provide context to your teammates in the link creation modal by showing them an example of a
   * link to be shortened.
   *
   * @default "https://codeqr.io/help/article/what-is-codeqr"
   */
  placeholder?: string;
  /** The URL to redirect to when a link under this domain has expired. */
  expiredUrl: string | null;
  /** The date the domain was created. */
  createdAt: string;
  /** The date the domain was last updated. */
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainSchemaSchema: Schema<DomainSchema> = s.object<DomainSchema>(
  {
    id: s.string(),
    slug: s.string(),
    verified: s.defaulted(s.boolean(), false),
    primary: s.defaulted(s.boolean(), false),
    archived: s.defaulted(s.boolean(), false),
    target: s.nullable(s.string()),
    type: s.defaulted(typeSchema, Type.Redirect),
    placeholder: s.defaulted(s.string(), "https://codeqr.io/help/article/what-is-codeqr"),
    expiredUrl: s.nullable(s.string()),
    createdAt: s.string(),
    updatedAt: s.string(),
  },
  { additionalProperties: s.json() },
);
