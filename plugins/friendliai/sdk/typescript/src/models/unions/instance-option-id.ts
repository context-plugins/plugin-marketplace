import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the instance option.
 *
 * Available options:
 * - 1x NVIDIA A100 80GB: `ShbPuOs4tfGb`
 * - 2x NVIDIA A100 80GB: `mrAHuYt7T40o`
 * - 4x NVIDIA A100 80GB: `JkNob0NMdoF3`
 * - 8x NVIDIA A100 80GB: `sYH4kHmAcA5P`
 * - 1x NVIDIA H100: `TwD5AqnBSVN0`
 * - 2x NVIDIA H100: `zfTutSiLn0Hq`
 * - 4x NVIDIA H100: `lfkRz5G48REc`
 * - 8x NVIDIA H100: `GUA4qYFmsYz8`
 * - 1x NVIDIA H200: `LnK1wTaKc7WO`
 * - 2x NVIDIA H200: `Tu6GjBnfHPe4`
 * - 4x NVIDIA H200: `OhTzYtZuomzI`
 * - 8x NVIDIA H200: `ahBzWtOuomsI`
 * - 1x NVIDIA B200: `8GiQTLKfJNOr`
 * - 2x NVIDIA B200: `brTZGIuYgVrs`
 * - 4x NVIDIA B200: `AFoZMFXZnAdD`
 * - 8x NVIDIA B200: `drbc6G9FxJWZ`
 * - 1x NVIDIA B300: `b300x1`
 * - 2x NVIDIA B300: `b300x2`
 * - 4x NVIDIA B300: `b300x4`
 * - 8x NVIDIA B300: `b300x8`
 */
export type InstanceOptionId = string;

export const instanceOptionIdSchema: Schema<InstanceOptionId> = s.of<InstanceOptionId>(s.union([s.string()]));
