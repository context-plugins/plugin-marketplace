import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateFacesRequest = {
  /** The ID of an existing collection containing the UserID. */
  collectionId: string;
  /** ID for the existing UserID. */
  userId: string;
  /**
   * Idempotent token used to identify the request to DisassociateFaces. If you use the same token
   * with multiple DisassociateFaces requests, the same response is returned. Use ClientRequestToken
   * to prevent the same request from being processed more than once.
   */
  clientRequestToken?: string;
  /** An array of face IDs to disassociate from the UserID. */
  faceIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateFacesRequestSchema: Schema<DisassociateFacesRequest> =
  s.object<DisassociateFacesRequest>(
    {
      collectionId: s.string(),
      userId: s.string(),
      clientRequestToken: s.optional(s.string()),
      faceIds: s.array(s.string()),
      _keysMap: {
        collectionId: "CollectionId",
        userId: "UserId",
        clientRequestToken: "ClientRequestToken",
        faceIds: "FaceIds",
      },
    },
    { additionalProperties: s.json() },
  );
