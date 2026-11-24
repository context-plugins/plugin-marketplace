import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createVoiceProfileRequestSchema,
  type CreateVoiceProfileRequest,
} from "../models/create-voice-profile-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { voiceProfileListSchema, type VoiceProfileList } from "../models/voice-profile-list.js";
import { voiceProfileSchema, type VoiceProfile } from "../models/voice-profile.js";
import type { Servers } from "../servers.js";

/**
 * Voice Profiles define the writing style, tone, and persona characteristics for AI content
 * generation within a Brand Kit. Multiple voice profiles can be created to support different
 * content contexts or audiences.
 */
export class VoiceProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Voice Profile
   *
   * @remarks
   * Creates a new Voice Profile within a Brand Kit defining the writing style, tone
   * characteristics, persona guidelines, and example content for AI generation.
   *
   * @returns The newly created Voice Profile.
   *
   * @throws {@link VoiceProfiles.CreateVoiceProfileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVoiceProfile(
    request: VoiceProfiles.CreateVoiceProfileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<VoiceProfile, VoiceProfiles.CreateVoiceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/voice-profiles",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createVoiceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: voiceProfileSchema },
        errorFactory: VoiceProfiles.CreateVoiceProfileError,
      },
      options,
    );
  }

  /**
   * Delete a Voice Profile
   *
   * @remarks
   * Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.
   *
   * @returns Voice Profile deleted successfully.
   *
   * @throws {@link VoiceProfiles.DeleteVoiceProfileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVoiceProfile(
    request: VoiceProfiles.DeleteVoiceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VoiceProfiles.DeleteVoiceProfileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() },
          { name: "profile_uid", value: request.profileUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VoiceProfiles.DeleteVoiceProfileError,
      },
      options,
    );
  }

  /**
   * Get all Voice Profiles
   *
   * @remarks
   * Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the
   * writing style and tone used in AI content generation for that Brand Kit.
   *
   * @returns A list of Voice Profiles in the Brand Kit.
   *
   * @throws {@link VoiceProfiles.GetAllVoiceProfilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllVoiceProfiles(
    request: VoiceProfiles.GetAllVoiceProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceProfileList, VoiceProfiles.GetAllVoiceProfilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/voice-profiles",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: voiceProfileListSchema },
        errorFactory: VoiceProfiles.GetAllVoiceProfilesError,
      },
      options,
    );
  }

  /**
   * Get a Voice Profile
   *
   * @remarks
   * Retrieves the full configuration of a specific Voice Profile including style guidelines, tone
   * settings, and example content.
   *
   * @returns The requested Voice Profile.
   *
   * @throws {@link VoiceProfiles.GetVoiceProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVoiceProfile(
    request: VoiceProfiles.GetVoiceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceProfile, VoiceProfiles.GetVoiceProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() },
          { name: "profile_uid", value: request.profileUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: voiceProfileSchema },
        errorFactory: VoiceProfiles.GetVoiceProfileError,
      },
      options,
    );
  }

  /**
   * Update a Voice Profile
   *
   * @remarks
   * Updates the configuration of an existing Voice Profile including style guidelines and tone
   * characteristics.
   *
   * @returns The updated Voice Profile.
   *
   * @throws {@link VoiceProfiles.UpdateVoiceProfileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVoiceProfile(
    request: VoiceProfiles.UpdateVoiceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceProfile, VoiceProfiles.UpdateVoiceProfileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() },
          { name: "profile_uid", value: request.profileUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createVoiceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: voiceProfileSchema },
        errorFactory: VoiceProfiles.UpdateVoiceProfileError,
      },
      options,
    );
  }
}

export namespace VoiceProfiles {
  export type CreateVoiceProfileRequestParams = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateVoiceProfileRequest;
  };

  export class CreateVoiceProfileError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateVoiceProfileError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteVoiceProfileRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the Voice Profile. */
    profileUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class DeleteVoiceProfileError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVoiceProfileError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllVoiceProfilesRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetAllVoiceProfilesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllVoiceProfilesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVoiceProfileRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the Voice Profile. */
    profileUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetVoiceProfileError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVoiceProfileError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateVoiceProfileRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the Voice Profile. */
    profileUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateVoiceProfileRequest;
  };

  export class UpdateVoiceProfileError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVoiceProfileError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
