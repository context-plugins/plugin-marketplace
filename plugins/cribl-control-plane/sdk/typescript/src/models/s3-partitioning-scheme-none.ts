import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type S3PartitioningSchemeNone = {
  /** Discriminator value. */
  partitioningScheme?: AuthenticationOptionsHealthCheckAuthenticationNone;
  /**
   * Traverse and include files from subdirectories. Leave this option enabled to ensure that all
   * nested directories are searched and their contents collected.
   */
  recurse?: boolean;
};

export const s3PartitioningSchemeNoneSchema: Schema<S3PartitioningSchemeNone> =
  s.object<S3PartitioningSchemeNone>({
    partitioningScheme: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
    recurse: s.optional(s.boolean()),
  });
