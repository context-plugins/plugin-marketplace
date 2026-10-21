import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { randomizationUnitRepSchema, type RandomizationUnitRep } from "./randomization-unit-rep.js";

export type RandomizationSettingsRep = {
  /** The project ID */
  projectId?: string;
  /** The project key */
  projectKey?: string;
  /** An array of the randomization units in this project */
  randomizationUnits?: RandomizationUnitRep[];
  creationDate?: number;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const randomizationSettingsRepSchema: Schema<RandomizationSettingsRep> =
  s.object<RandomizationSettingsRep>({
    projectId: s.optional(s.string()),
    projectKey: s.optional(s.string()),
    randomizationUnits: s.optional(s.array(s.lazy(() => randomizationUnitRepSchema))),
    creationDate: s.optional(s.int()),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      projectId: "_projectId",
      projectKey: "_projectKey",
      creationDate: "_creationDate",
      links: "_links",
    },
  });
