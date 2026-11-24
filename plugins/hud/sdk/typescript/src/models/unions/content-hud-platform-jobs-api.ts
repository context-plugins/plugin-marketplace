import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifContentPartInternalSchema,
  atifContentPartSchema,
  type AtifContentPart,
} from "../atif-content-part.js";

export type ContentHudPlatformJobsApi = string | AtifContentPart[];

export const contentHudPlatformJobsApiInternalSchema: Schema<ContentHudPlatformJobsApi> =
  s.of<ContentHudPlatformJobsApi>(
    s.union([s.string(), s.array(s.lazy(() => atifContentPartInternalSchema))]),
  );

export const contentHudPlatformJobsApiSchema: Schema<ContentHudPlatformJobsApi> = s.lazySchema(() =>
  s.of<ContentHudPlatformJobsApi>(
    s.union([s.string(), s.array(s.lazy(() => atifContentPartSchema)).check(s.maxLength(1000))]),
  ),
);
