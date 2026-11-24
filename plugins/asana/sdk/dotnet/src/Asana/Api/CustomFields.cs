using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.CustomFields;

namespace Asana.Api;

/// <summary>
/// _Note: Custom fields are a premium feature. Integrations which work with custom fields need to handle an assortment of use cases for free and premium users in context of free and premium organizations. For a detailed examination of which data users will have access in different circumstances, review the section below on access control._
/// <para>
/// In the Asana application, tasks, projects, and portfolios can hold user-specified custom fields which provide extra information (e.g., a "priority" property with an associated value, or a number representing the time required to complete a task). This lets a user define the type of information that each item within a project or portfolio can contain in addition to the built-in fields that Asana provides. <c>display_value</c> is a read-only field that will always be a string. For apps that use custom fields, this is a great way to safely display/export the value of a custom field, regardless of its type. We suggest apps use this field in order to future-proof for changes to custom fields. #### Characteristics of custom fields
/// </para>
/// <list type="bullet">
///   <item><description>There is metadata that defines the custom field. This metadata can be shared across an entire workspace, or be specific to a project or portfolio. * Creating a custom field setting on a project or portfolio means each direct child will have the custom field. This is conceptually akin to adding columns in a database or a spreadsheet: every task (row) in the project (table) can contain information for that field, including "blank" values (i.e., <c>null</c> data). For portfolio custom fields, every project (row) in the portfolio (table) will contain information for the custom field. * Custom field settings only go one child deep. This means that a custom field setting on a portfolio will give each project the custom field, but not each task within those projects. * Tasks have custom field _values_ assigned to them. #### Types of custom fields</description></item>
/// </list>
/// <para>
/// Integrations using custom fields need to be aware of the six basic types that a custom field can adopt. These types are:
/// </para>
/// <list type="bullet">
///   <item><description><c>text</c> - an arbitrary, relatively short string of text</description></item>
///   <item><description><c>number</c> - a number with a defined level of precision</description></item>
///   <item><description><c>enum</c> - a selection of a single option from a defined list of options (i.e., mutually exclusive selections)</description></item>
///   <item><description><c>multi_enum</c> - a selection of one or more options from a defined list of options (i.e., mutually inclusive selections)</description></item>
///   <item><description><c>date</c> - a reference date with an optional time value</description></item>
///   <item><description><c>people</c> - a list of active contributors (i.e., where their relationship to the work is defined in the custom field title)</description></item>
/// </list>
/// <para>
/// #### Example use case
/// </para>
/// <para>
/// Consider an organization that has defined a custom field for "Priority". This field is of <c>enum</c> type and can have user-defined values of <c>Low</c>, <c>Medium</c>, or <c>High</c>. This is the field metadata, and it is visible within, and shared across, the entire organization. A project is then created in the organization, called "Bugs", and the "Priority" custom field is associated with that project. This will allow all tasks within the "Bugs" project to have an associated "Priority". A new task is created within "Bugs". This task, then, has a field named "Priority" which can take on the custom field value of one of <c>[null]</c>, <c>Low</c>, <c>Medium</c>, and <c>High</c>. #### Custom fields in the API
/// </para>
/// <para>
/// These custom fields are accessible via the API through a number of endpoints at the top level (e.g. <c>/custom_fields</c> and <c>/custom_field_settings</c>) and through requests on workspaces, portfolios, projects, and tasks resources. The API also provides a way to fetch both the metadata and data which define each particular custom field, so that a client application may render proper UI to display or edit the values. Text fields are currently limited to 1024 characters. On tasks, their custom field value will have a <c>text_value</c> property to represent this field.
/// </para>
/// </summary>
public sealed class CustomFields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomFields(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom field in a workspace. Every custom field is required
    /// to be created in a specific workspace, and this workspace cannot be
    /// changed once set.
    /// <para>
    /// A custom field’s name must be unique within a workspace and not conflict
    /// with names of existing task properties such as <c>Due Date</c> or <c>Assignee</c>.
    /// A custom field’s type must be one of <c>text</c>, <c>enum</c>, <c>multi_enum</c>, <c>number</c>,
    /// <c>date</c>, or <c>people</c>.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created custom field.
    /// </para>
    /// </remarks>
    public Task<CustomFieldsResponse> CreateCustomField(CreateCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldsResponse>(),
            CreateCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an enum option
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsEnumOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnumOptionForCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
    /// Locked custom fields can only have enum options added by the user who locked the field.
    /// Returns the full record of the newly created enum option.
    /// </remarks>
    public Task<CustomFieldsEnumOptionsResponse> CreateEnumOptionForCustomField(CreateEnumOptionForCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields/{custom_field_gid}/enum_options"),
            [new TemplateParam("custom_field_gid", request.CustomFieldGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldsEnumOptionsResponse>(),
            CreateEnumOptionForCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
    /// Locked custom fields can only be deleted by the user who locked the field.
    /// Returns an empty data record.
    /// </remarks>
    public Task<CustomFieldsResponse3> DeleteCustomField(DeleteCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields/{custom_field_gid}"),
            [new TemplateParam("custom_field_gid", request.CustomFieldGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldsResponse3>(),
            DeleteCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the complete definition of a custom field’s metadata.
    /// <para>
    /// Since custom fields can be defined for one of a number of types, and
    /// these types have different data and behaviors, there are fields that are
    /// relevant to a particular type. For instance, as noted above, enum_options
    /// is only relevant for the enum type and defines the set of choices that
    /// the enum could represent. The examples below show some of these
    /// type-specific custom field definitions.
    /// </para>
    /// </remarks>
    public Task<CustomFieldsResponse> GetCustomField(GetCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields/{custom_field_gid}"),
            [new TemplateParam("custom_field_gid", request.CustomFieldGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldsResponse>(),
            GetCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a workspace's custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesCustomFieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldsForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the compact representation of all of the custom fields in a workspace.
    /// </remarks>
    public Task<WorkspacesCustomFieldsResponse> GetCustomFieldsForWorkspace(GetCustomFieldsForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/custom_fields"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesCustomFieldsResponse>(),
            GetCustomFieldsForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reorder a custom field's enum
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsEnumOptionsInsertResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InsertEnumOptionForCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves a particular enum option to be either before or after another specified enum option in the custom field.
    /// Locked custom fields can only be reordered by the user who locked the field.
    /// </remarks>
    public Task<CustomFieldsEnumOptionsInsertResponse> InsertEnumOptionForCustomField(InsertEnumOptionForCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields/{custom_field_gid}/enum_options/insert"),
            [new TemplateParam("custom_field_gid", request.CustomFieldGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldsEnumOptionsInsertResponse>(),
            InsertEnumOptionForCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the <c>data</c> block will be updated; any unspecified fields will remain unchanged
    /// When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
    /// A custom field’s <c>type</c> cannot be updated.
    /// An enum custom field’s <c>enum_options</c> cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update <c>enum_options</c>.
    /// Locked custom fields can only be updated by the user who locked the field.
    /// Returns the complete updated custom field record.
    /// </remarks>
    public Task<CustomFieldsResponse> UpdateCustomField(UpdateCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_fields/{custom_field_gid}"),
            [new TemplateParam("custom_field_gid", request.CustomFieldGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldsResponse>(),
            UpdateCustomFieldError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an enum option
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnumOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEnumOptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing enum option. Enum custom fields require at least one enabled enum option.
    /// Locked custom fields can only be updated by the user who locked the field.
    /// Returns the full record of the updated enum option.
    /// </remarks>
    public Task<EnumOptionsResponse> UpdateEnumOption(UpdateEnumOptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/enum_options/{enum_option_gid}"),
            [new TemplateParam("enum_option_gid", request.EnumOptionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnumOptionsResponse>(),
            UpdateEnumOptionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
