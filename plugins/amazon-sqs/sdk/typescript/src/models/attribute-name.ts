import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttributeName = {
  All: "All",
  Policy: "Policy",
  VisibilityTimeout: "VisibilityTimeout",
  MaximumMessageSize: "MaximumMessageSize",
  MessageRetentionPeriod: "MessageRetentionPeriod",
  ApproximateNumberOfMessages: "ApproximateNumberOfMessages",
  ApproximateNumberOfMessagesNotVisible: "ApproximateNumberOfMessagesNotVisible",
  CreatedTimestamp: "CreatedTimestamp",
  LastModifiedTimestamp: "LastModifiedTimestamp",
  QueueArn: "QueueArn",
  ApproximateNumberOfMessagesDelayed: "ApproximateNumberOfMessagesDelayed",
  DelaySeconds: "DelaySeconds",
  ReceiveMessageWaitTimeSeconds: "ReceiveMessageWaitTimeSeconds",
  RedrivePolicy: "RedrivePolicy",
  FifoQueue: "FifoQueue",
  ContentBasedDeduplication: "ContentBasedDeduplication",
  KmsMasterKeyId: "KmsMasterKeyId",
  KmsDataKeyReusePeriodSeconds: "KmsDataKeyReusePeriodSeconds",
  DeduplicationScope: "DeduplicationScope",
  FifoThroughputLimit: "FifoThroughputLimit",
  RedriveAllowPolicy: "RedriveAllowPolicy",
  SqsManagedSseEnabled: "SqsManagedSseEnabled",
} as const;
export type AttributeName = (typeof AttributeName)[keyof typeof AttributeName] | (string & {});

export const attributeNameSchema: EnumSchema<AttributeName> = s.enumOf<AttributeName>(AttributeName);
