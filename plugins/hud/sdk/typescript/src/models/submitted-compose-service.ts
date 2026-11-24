import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSchema, type Build } from "./unions/build.js";
import { commandSchema, type Command } from "./unions/command.js";
import { entrypointSchema, type Entrypoint } from "./unions/entrypoint.js";
import { healthcheckSchema, type Healthcheck } from "./unions/healthcheck.js";
import { imageInternalSchema, imageSchema, type Image } from "./unions/image.js";
import { scaleInternalSchema, scaleSchema, type Scale } from "./unions/scale.js";
import { userSchema, type User } from "./unions/user.js";
import { workingDirSchema, type WorkingDir } from "./unions/working-dir.js";

/** Pullable service in a normalized hosted Compose document. */
export type SubmittedComposeService = {
  image?: Image;
  build?: Build;
  user?: User;
  environment?: Record<string, string>;
  entrypoint?: Entrypoint;
  command?: Command;
  workingDir?: WorkingDir;
  healthcheck?: Healthcheck;
  expose?: Record<string, unknown>[];
  ports?: Record<string, unknown>[];
  volumes?: Record<string, unknown>[];
  scale?: Scale;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedComposeServiceProperties: s.Shape<SubmittedComposeService> = {
  image: s.optional(s.lazy(() => imageInternalSchema)),
  build: s.optional(s.lazy(() => buildSchema)),
  user: s.optional(s.lazy(() => userSchema)),
  environment: s.optional(s.record(s.string(), s.string())),
  entrypoint: s.optional(s.lazy(() => entrypointSchema)),
  command: s.optional(s.lazy(() => commandSchema)),
  workingDir: s.optional(s.lazy(() => workingDirSchema)),
  healthcheck: s.optional(s.lazy(() => healthcheckSchema)),
  expose: s.optional(s.array(s.record(s.string(), s.unknown()))),
  ports: s.optional(s.array(s.record(s.string(), s.unknown()))),
  volumes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  scale: s.optional(s.lazy(() => scaleInternalSchema)),
  _keysMap: {
    workingDir: "working_dir",
  },
};

export const submittedComposeServiceInternalSchema: Schema<SubmittedComposeService> =
  s.object<SubmittedComposeService>(submittedComposeServiceProperties, { additionalProperties: s.json() });

export const submittedComposeServiceSchema: Schema<SubmittedComposeService> = s.lazySchema(() =>
  s.object<SubmittedComposeService>(
    {
      ...submittedComposeServiceProperties,
      image: s.optional(s.lazy(() => imageSchema)),
      scale: s.optional(s.lazy(() => scaleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
