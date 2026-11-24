import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { parametersToDeleteSchema, type ParametersToDelete } from "./parameters-to-delete.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";
import {
  streamProcessorDataSharingPreferenceSchema,
  type StreamProcessorDataSharingPreference,
} from "./stream-processor-data-sharing-preference.js";
import {
  streamProcessorSettingsForUpdateSchema,
  type StreamProcessorSettingsForUpdate,
} from "./stream-processor-settings-for-update.js";

export type UpdateStreamProcessorRequest = {
  /** Name of the stream processor that you want to update. */
  name: string;
  settingsForUpdate?: StreamProcessorSettingsForUpdate;
  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. This
   * is an optional parameter for label detection stream processors.
   */
  regionsOfInterestForUpdate?: RegionOfInterest[];
  dataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;
  /** A list of parameters you want to delete from the stream processor. */
  parametersToDelete?: ParametersToDelete[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStreamProcessorRequestSchema: Schema<UpdateStreamProcessorRequest> =
  s.object<UpdateStreamProcessorRequest>(
    {
      name: s.string(),
      settingsForUpdate: s.optional(s.lazy(() => streamProcessorSettingsForUpdateSchema)),
      regionsOfInterestForUpdate: s.optional(s.array(s.lazy(() => regionOfInterestSchema))),
      dataSharingPreferenceForUpdate: s.optional(s.lazy(() => streamProcessorDataSharingPreferenceSchema)),
      parametersToDelete: s.optional(s.array(s.lazy(() => parametersToDeleteSchema))),
      _keysMap: {
        name: "Name",
        settingsForUpdate: "SettingsForUpdate",
        regionsOfInterestForUpdate: "RegionsOfInterestForUpdate",
        dataSharingPreferenceForUpdate: "DataSharingPreferenceForUpdate",
        parametersToDelete: "ParametersToDelete",
      },
    },
    { additionalProperties: s.json() },
  );
