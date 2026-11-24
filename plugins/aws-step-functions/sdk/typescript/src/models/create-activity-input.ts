import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateActivityInput = {
  /**
   * The name of the activity to create. This name must be unique for your Amazon Web Services
   * account and region. A name must not contain: white space brackets { } [ ] wildcard characters ?
   * * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F,
   * U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with
   * CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /**
   * The list of tags to add to a resource. An array of key-value pairs. For more information, see
   * Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide,
   * and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white
   * space, or these symbols: _ . : / = + - \@.
   */
  tags?: Tag[];
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createActivityInputSchema: Schema<CreateActivityInput> = s.object<CreateActivityInput>(
  {
    name: s.string(),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);
