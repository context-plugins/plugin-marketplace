import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoUpdate1Schema, type AutoUpdate1 } from "./auto-update1.js";
import { datasetMetadataSchema, type DatasetMetadata } from "./dataset-metadata.js";
import { feature2Schema, type Feature2 } from "./feature2.js";
import { status2Schema, type Status2 } from "./status2.js";

export type ProjectDescription = {
  /** The Amazon Resource Name (ARN) of the project. */
  projectArn?: string;
  /** The Unix timestamp for the date and time that the project was created. */
  creationTimestamp?: Date;
  /** The current status of the project. */
  status?: Status2;
  /** Information about the training and test datasets in the project. */
  datasets?: DatasetMetadata[];
  /** Specifies the project that is being customized. */
  feature?: Feature2;
  /**
   * Indicates whether automatic retraining will be attempted for the versions of the project.
   * Applies only to adapters.
   */
  autoUpdate?: AutoUpdate1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectDescriptionSchema: Schema<ProjectDescription> = s.object<ProjectDescription>(
  {
    projectArn: s.optional(s.string()),
    creationTimestamp: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => status2Schema)),
    datasets: s.optional(s.array(s.lazy(() => datasetMetadataSchema))),
    feature: s.optional(s.lazy(() => feature2Schema)),
    autoUpdate: s.optional(s.lazy(() => autoUpdate1Schema)),
    _keysMap: {
      projectArn: "ProjectArn",
      creationTimestamp: "CreationTimestamp",
      status: "Status",
      datasets: "Datasets",
      feature: "Feature",
      autoUpdate: "AutoUpdate",
    },
  },
  { additionalProperties: s.json() },
);
