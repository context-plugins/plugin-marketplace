import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorEventSchema, type ErrorEvent } from "../error-event.js";
import {
  findAllCandidateMatchStatusEventSchema,
  type FindAllCandidateMatchStatusEvent,
} from "../find-all-candidate-match-status-event.js";
import { findAllRunStatusEventSchema, type FindAllRunStatusEvent } from "../find-all-run-status-event.js";
import {
  findAllSchemaUpdatedEventSchema,
  type FindAllSchemaUpdatedEvent,
} from "../find-all-schema-updated-event.js";

export type Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet =
  | (FindAllSchemaUpdatedEvent & { type: "findall.schema.updated" })
  | (FindAllRunStatusEvent & { type: "findall.status" })
  | (FindAllCandidateMatchStatusEvent & { type: "findall.candidate.generated" })
  | (FindAllCandidateMatchStatusEvent & { type: "findall.candidate.matched" })
  | (FindAllCandidateMatchStatusEvent & { type: "findall.candidate.unmatched" })
  | (FindAllCandidateMatchStatusEvent & { type: "findall.candidate.discarded" })
  | (FindAllCandidateMatchStatusEvent & { type: "findall.candidate.enriched" })
  | (ErrorEvent & { type: "error" });

export const response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetSchema: Schema<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet> =
  s.discriminatedUnion<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>("type", {
    "findall.schema.updated": findAllSchemaUpdatedEventSchema,
    "findall.status": findAllRunStatusEventSchema,
    "findall.candidate.generated": findAllCandidateMatchStatusEventSchema,
    "findall.candidate.matched": findAllCandidateMatchStatusEventSchema,
    "findall.candidate.unmatched": findAllCandidateMatchStatusEventSchema,
    "findall.candidate.discarded": findAllCandidateMatchStatusEventSchema,
    "findall.candidate.enriched": findAllCandidateMatchStatusEventSchema,
    error: errorEventSchema,
  });
