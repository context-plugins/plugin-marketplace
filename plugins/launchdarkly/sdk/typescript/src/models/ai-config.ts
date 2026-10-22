import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigDependencySchema, type AiConfigDependency } from "./ai-config-dependency.js";
import { aiConfigVariationSchema, type AiConfigVariation } from "./ai-config-variation.js";
import { aiConfigsAccessSchema, type AiConfigsAccess } from "./ai-configs-access.js";
import { Mode, modeSchema } from "./mode.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";
import { aiConfigMaintainerSchema, type AiConfigMaintainer } from "./unions/ai-config-maintainer.js";

export type AiConfig = {
  access?: AiConfigsAccess;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
  description: string;
  key: string;
  maintainer?: AiConfigMaintainer;
  /** @default Mode.Completion */
  mode?: Mode;
  name: string;
  tags: string[];
  version: number;
  variations: AiConfigVariation[];
  createdAt: number;
  updatedAt: number;
  /** Evaluation metric key for this AI Config */
  evaluationMetricKey?: string;
  /**
   * List of evaluation metric keys for this AI Config
   *
   * @deprecated
   */
  evaluationMetricKeys?: string[];
  /** Whether the evaluation metric is inverted, meaning a lower value is better if set as true */
  isInverted?: boolean;
  /** Resources that depend on this AI Config, grouped by type */
  dependencies?: AiConfigDependency[];
};

export const aiConfigSchema: Schema<AiConfig> = s.object<AiConfig>({
  access: s.optional(s.lazy(() => aiConfigsAccessSchema)),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  description: s.string(),
  key: s.string(),
  maintainer: s.optional(s.lazy(() => aiConfigMaintainerSchema)),
  mode: s.defaulted(modeSchema, Mode.Completion),
  name: s.string(),
  tags: s.array(s.string()),
  version: s.int(),
  variations: s.array(s.lazy(() => aiConfigVariationSchema)),
  createdAt: s.int(),
  updatedAt: s.int(),
  evaluationMetricKey: s.optional(s.string()),
  evaluationMetricKeys: s.optional(s.array(s.string())),
  isInverted: s.optional(s.boolean()),
  dependencies: s.optional(s.array(s.lazy(() => aiConfigDependencySchema))),
  _keysMap: {
    access: "_access",
    links: "_links",
    maintainer: "_maintainer",
  },
});
