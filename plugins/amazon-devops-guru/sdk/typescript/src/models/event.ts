import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { eventClassSchema, type EventClass } from "./event-class.js";
import { eventResourceSchema, type EventResource } from "./event-resource.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";

export type Event = {
  resourceCollection?: ResourceCollection;
  /** The ID of the event. */
  id?: string;
  /** A Timestamp that specifies the time the event occurred. */
  time?: Date;
  /** The Amazon Web Services source that emitted the event. */
  eventSource?: string;
  /** The name of the event. */
  name?: string;
  /** The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event. */
  dataSource?: DataSource;
  /**
   * The class of the event. The class specifies what the event is related to, such as an
   * infrastructure change, a deployment, or a schema change.
   */
  eventClass?: EventClass;
  /**
   * An EventResource object that contains information about the resource that emitted the event.
   */
  resources?: EventResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
    id: s.optional(s.string()),
    time: s.optional(s.dateTime()),
    eventSource: s.optional(s.string()),
    name: s.optional(s.string()),
    dataSource: s.optional(s.lazy(() => dataSourceSchema)),
    eventClass: s.optional(s.lazy(() => eventClassSchema)),
    resources: s.optional(s.array(s.lazy(() => eventResourceSchema))),
    _keysMap: {
      resourceCollection: "ResourceCollection",
      id: "Id",
      time: "Time",
      eventSource: "EventSource",
      name: "Name",
      dataSource: "DataSource",
      eventClass: "EventClass",
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
