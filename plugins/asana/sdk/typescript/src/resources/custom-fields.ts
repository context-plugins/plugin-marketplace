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
  customFieldsEnumOptionsInsertRequestSchema,
  type CustomFieldsEnumOptionsInsertRequest,
} from "../models/custom-fields-enum-options-insert-request.js";
import {
  customFieldsEnumOptionsInsertResponseSchema,
  type CustomFieldsEnumOptionsInsertResponse,
} from "../models/custom-fields-enum-options-insert-response.js";
import {
  customFieldsEnumOptionsRequestSchema,
  type CustomFieldsEnumOptionsRequest,
} from "../models/custom-fields-enum-options-request.js";
import {
  customFieldsEnumOptionsResponseSchema,
  type CustomFieldsEnumOptionsResponse,
} from "../models/custom-fields-enum-options-response.js";
import { customFieldsRequestSchema, type CustomFieldsRequest } from "../models/custom-fields-request.js";
import { customFieldsResponseSchema, type CustomFieldsResponse } from "../models/custom-fields-response.js";
import {
  customFieldsResponse3Schema,
  type CustomFieldsResponse3,
} from "../models/custom-fields-response3.js";
import { enumOptionsRequestSchema, type EnumOptionsRequest } from "../models/enum-options-request.js";
import { enumOptionsResponseSchema, type EnumOptionsResponse } from "../models/enum-options-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  workspacesCustomFieldsResponseSchema,
  type WorkspacesCustomFieldsResponse,
} from "../models/workspaces-custom-fields-response.js";
import type { Servers } from "../servers.js";

/**
 * _Note: Custom fields are a premium feature. Integrations which work with custom fields need to
 * handle an assortment of use cases for free and premium users in context of free and premium
 * organizations. For a detailed examination of which data users will have access in different
 * circumstances, review the section below on access control._
 *
 * In the Asana application, tasks, projects, and portfolios can hold user-specified custom fields
 * which provide extra information (e.g., a "priority" property with an associated value, or a
 * number representing the time required to complete a task). This lets a user define the type of
 * information that each item within a project or portfolio can contain in addition to the built-in
 * fields that Asana provides. `display_value` is a read-only field that will always be a string.
 * For apps that use custom fields, this is a great way to safely display/export the value of a
 * custom field, regardless of its type. We suggest apps use this field in order to future-proof for
 * changes to custom fields. #### Characteristics of custom fields
 *
 * * There is metadata that defines the custom field. This metadata can be shared across an entire
 *   workspace, or be specific to a project or portfolio. * Creating a custom field setting on a
 *   project or portfolio means each direct child will have the custom field. This is conceptually
 *   akin to adding columns in a database or a spreadsheet: every task (row) in the project (table)
 *   can contain information for that field, including "blank" values (i.e., `null` data). For
 *   portfolio custom fields, every project (row) in the portfolio (table) will contain information
 *   for the custom field. * Custom field settings only go one child deep. This means that a custom
 *   field setting on a portfolio will give each project the custom field, but not each task within
 *   those projects. * Tasks have custom field _values_ assigned to them. #### Types of custom
 *   fields
 *
 * Integrations using custom fields need to be aware of the six basic types that a custom field can
 * adopt. These types are:
 *
 * * `text` - an arbitrary, relatively short string of text
 * * `number` - a number with a defined level of precision
 * * `enum` - a selection of a single option from a defined list of options (i.e., mutually
 *   exclusive selections)
 * * `multi_enum` - a selection of one or more options from a defined list of options (i.e.,
 *   mutually inclusive selections)
 * * `date` - a reference date with an optional time value
 * * `people` - a list of active contributors (i.e., where their relationship to the work is defined
 *   in the custom field title)
 *
 * #### Example use case
 *
 * Consider an organization that has defined a custom field for "Priority". This field is of `enum`
 * type and can have user-defined values of `Low`, `Medium`, or `High`. This is the field metadata,
 * and it is visible within, and shared across, the entire organization. A project is then created
 * in the organization, called "Bugs", and the "Priority" custom field is associated with that
 * project. This will allow all tasks within the "Bugs" project to have an associated "Priority". A
 * new task is created within "Bugs". This task, then, has a field named "Priority" which can take
 * on the custom field value of one of `[null]`, `Low`, `Medium`, and `High`. #### Custom fields in
 * the API
 *
 * These custom fields are accessible via the API through a number of endpoints at the top level
 * (e.g. `/custom_fields` and `/custom_field_settings`) and through requests on workspaces,
 * portfolios, projects, and tasks resources. The API also provides a way to fetch both the metadata
 * and data which define each particular custom field, so that a client application may render
 * proper UI to display or edit the values. Text fields are currently limited to 1024 characters. On
 * tasks, their custom field value will have a `text_value` property to represent this field.
 */
export class CustomFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a custom field
   *
   * @remarks
   * Creates a new custom field in a workspace. Every custom field is required to be created in a
   * specific workspace, and this workspace cannot be changed once set.
   *
   * A custom field’s name must be unique within a workspace and not conflict with names of existing
   * task properties such as `Due Date` or `Assignee`. A custom field’s type must be one of `text`,
   * `enum`, `multi_enum`, `number`, `date`, or `people`.
   *
   * Returns the full record of the newly created custom field.
   *
   * @returns Custom field successfully created.
   *
   * @throws {@link CustomFields.CreateCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomField(
    request: CustomFields.CreateCustomFieldRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsResponse, CustomFields.CreateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_fields"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customFieldsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldsResponseSchema },
        errorFactory: CustomFields.CreateCustomFieldError,
      },
      options,
    );
  }

  /**
   * Create an enum option
   *
   * @remarks
   * Creates an enum option and adds it to this custom field’s list of enum options. A custom field
   * can have at most 500 enum options (including disabled options). By default new enum options are
   * inserted at the end of a custom field’s list. Locked custom fields can only have enum options
   * added by the user who locked the field. Returns the full record of the newly created enum
   * option.
   *
   * @returns Custom field enum option successfully created.
   *
   * @throws {@link CustomFields.CreateEnumOptionForCustomFieldError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEnumOptionForCustomField(
    request: CustomFields.CreateEnumOptionForCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsEnumOptionsResponse, CustomFields.CreateEnumOptionForCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_fields/{custom_field_gid}/enum_options"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "custom_field_gid", value: request.customFieldGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customFieldsEnumOptionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldsEnumOptionsResponseSchema },
        errorFactory: CustomFields.CreateEnumOptionForCustomFieldError,
      },
      options,
    );
  }

  /**
   * Delete a custom field
   *
   * @remarks
   * A specific, existing custom field can be deleted by making a DELETE request on the URL for that
   * custom field. Locked custom fields can only be deleted by the user who locked the field.
   * Returns an empty data record.
   *
   * @returns The custom field was successfully deleted.
   *
   * @throws {@link CustomFields.DeleteCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomField(
    request: CustomFields.DeleteCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsResponse3, CustomFields.DeleteCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/custom_fields/{custom_field_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "custom_field_gid", value: request.customFieldGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldsResponse3Schema },
        errorFactory: CustomFields.DeleteCustomFieldError,
      },
      options,
    );
  }

  /**
   * Get a custom field
   *
   * @remarks
   * Get the complete definition of a custom field’s metadata.
   *
   * Since custom fields can be defined for one of a number of types, and these types have different
   * data and behaviors, there are fields that are relevant to a particular type. For instance, as
   * noted above, enum_options is only relevant for the enum type and defines the set of choices
   * that the enum could represent. The examples below show some of these type-specific custom field
   * definitions.
   *
   * @returns Successfully retrieved the complete definition of a custom field’s metadata.
   *
   * @throws {@link CustomFields.GetCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomField(
    request: CustomFields.GetCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsResponse, CustomFields.GetCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_fields/{custom_field_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "custom_field_gid", value: request.customFieldGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldsResponseSchema },
        errorFactory: CustomFields.GetCustomFieldError,
      },
      options,
    );
  }

  /**
   * Get a workspace's custom fields
   *
   * @remarks
   * Returns a list of the compact representation of all of the custom fields in a workspace.
   *
   * @returns Successfully retrieved all custom fields for the given workspace.
   *
   * @throws {@link CustomFields.GetCustomFieldsForWorkspaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomFieldsForWorkspace(
    request: CustomFields.GetCustomFieldsForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesCustomFieldsResponse, CustomFields.GetCustomFieldsForWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/custom_fields"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesCustomFieldsResponseSchema },
        errorFactory: CustomFields.GetCustomFieldsForWorkspaceError,
      },
      options,
    );
  }

  /**
   * Reorder a custom field's enum
   *
   * @remarks
   * Moves a particular enum option to be either before or after another specified enum option in
   * the custom field. Locked custom fields can only be reordered by the user who locked the field.
   *
   * @returns Custom field enum option successfully reordered.
   *
   * @throws {@link CustomFields.InsertEnumOptionForCustomFieldError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insertEnumOptionForCustomField(
    request: CustomFields.InsertEnumOptionForCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsEnumOptionsInsertResponse, CustomFields.InsertEnumOptionForCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_fields/{custom_field_gid}/enum_options/insert"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "custom_field_gid", value: request.customFieldGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customFieldsEnumOptionsInsertRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldsEnumOptionsInsertResponseSchema },
        errorFactory: CustomFields.InsertEnumOptionForCustomFieldError,
      },
      options,
    );
  }

  /**
   * Update a custom field
   *
   * @remarks
   * A specific, existing custom field can be updated by making a PUT request on the URL for that
   * custom field. Only the fields provided in the `data` block will be updated; any unspecified
   * fields will remain unchanged When using this method, it is best to specify only those fields
   * you wish to change, or else you may overwrite changes made by another user since you last
   * retrieved the custom field. A custom field’s `type` cannot be updated. An enum custom field’s
   * `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for
   * information on how to update `enum_options`. Locked custom fields can only be updated by the
   * user who locked the field. Returns the complete updated custom field record.
   *
   * @returns The custom field was successfully updated.
   *
   * @throws {@link CustomFields.UpdateCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomField(
    request: CustomFields.UpdateCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsResponse, CustomFields.UpdateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/custom_fields/{custom_field_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "custom_field_gid", value: request.customFieldGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customFieldsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldsResponseSchema },
        errorFactory: CustomFields.UpdateCustomFieldError,
      },
      options,
    );
  }

  /**
   * Update an enum option
   *
   * @remarks
   * Updates an existing enum option. Enum custom fields require at least one enabled enum option.
   * Locked custom fields can only be updated by the user who locked the field. Returns the full
   * record of the updated enum option.
   *
   * @returns Successfully updated the specified custom field enum.
   *
   * @throws {@link CustomFields.UpdateEnumOptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEnumOption(
    request: CustomFields.UpdateEnumOptionRequest,
    options?: RequestOptions,
  ): ApiPromise<EnumOptionsResponse, CustomFields.UpdateEnumOptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/enum_options/{enum_option_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "enum_option_gid", value: request.enumOptionGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => enumOptionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: enumOptionsResponseSchema },
        errorFactory: CustomFields.UpdateEnumOptionError,
      },
      options,
    );
  }
}

export namespace CustomFields {
  export type CreateCustomFieldRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /** The custom field object to create. */
    body?: CustomFieldsRequest;
  };

  export class CreateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateEnumOptionForCustomFieldRequest = {
    /** Globally unique identifier for the custom field. */
    customFieldGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /** The enum option object to create. */
    body?: CustomFieldsEnumOptionsRequest;
  };

  export class CreateEnumOptionForCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEnumOptionForCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomFieldRequest = {
    /** Globally unique identifier for the custom field. */
    customFieldGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class DeleteCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomFieldRequest = {
    /** Globally unique identifier for the custom field. */
    customFieldGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomFieldsForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetCustomFieldsForWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldsForWorkspaceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type InsertEnumOptionForCustomFieldRequest = {
    /** Globally unique identifier for the custom field. */
    customFieldGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The enum option object to create. */
    body?: CustomFieldsEnumOptionsInsertRequest;
  };

  export class InsertEnumOptionForCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsertEnumOptionForCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomFieldRequest = {
    /** Globally unique identifier for the custom field. */
    customFieldGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The custom field object with all updated properties. */
    body?: CustomFieldsRequest;
  };

  export class UpdateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomFieldError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateEnumOptionRequest = {
    /** Globally unique identifier for the enum option. */
    enumOptionGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The enum option object to update */
    body?: EnumOptionsRequest;
  };

  export class UpdateEnumOptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEnumOptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
