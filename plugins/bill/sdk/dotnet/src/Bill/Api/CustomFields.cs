using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.CustomFields;

namespace Bill.Api;

public sealed class CustomFields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomFields(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new custom field.
    /// <para>
    /// See Transactions in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<CustomFieldResponseDto> CreateCustomField(CreateCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldResponseDto>(),
            CreateCustomFieldError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a custom field value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CustomFieldValueResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomFieldValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new value for an existing custom field.
    /// </remarks>
    public Task<IReadOnlyList<CustomFieldValueResponseDto>> CreateCustomFieldValues(CreateCustomFieldValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}/values"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<CustomFieldValueResponseDto>>(),
            CreateCustomFieldValuesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not available in the list of custom fields.
    /// </remarks>
    public Task DeleteCustomField(DeleteCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCustomFieldError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom field value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomFieldValueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing custom field value.
    /// <para>
    /// A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In addition, the deleted value cannot be assigned to current or future transactions. The deleted value will continue to be assigned to past transactions.
    /// </para>
    /// </remarks>
    public Task DeleteCustomFieldValue(DeleteCustomFieldValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}/values"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteCustomFieldValueError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get custom field details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing custom field.
    /// </remarks>
    public Task<CustomFieldResponseDto> GetCustomField(GetCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldResponseDto>(),
            GetCustomFieldError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get custom field value details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldValueResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing custom field value.
    /// </remarks>
    public Task<CustomFieldValueResponseDto> GetCustomFieldValues(GetCustomFieldValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}"),
            [
                new TemplateParam("customFieldId", request.CustomFieldId),
                new TemplateParam("customFieldValueId", request.CustomFieldValueId),
            ],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldValueResponseDto>(),
            GetCustomFieldValuesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of custom field values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoCustomFieldValueResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomFieldValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of custom field value objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoCustomFieldValueResponseDto> ListCustomFieldValues(ListCustomFieldValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}/values"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [
                new Param("max", request.Max),
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoCustomFieldValueResponseDto>(),
            ListCustomFieldValuesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoCustomFieldResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomFieldsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of custom field objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoCustomFieldResponseDto> ListCustomFields(ListCustomFieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields"),
            [],
            [
                new Param("max", request.Max),
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoCustomFieldResponseDto>(),
            ListCustomFieldsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing custom field.
    /// </remarks>
    public Task<CustomFieldResponseDto> UpdateCustomField(UpdateCustomFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/custom-fields/{customFieldId}"),
            [new TemplateParam("customFieldId", request.CustomFieldId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldResponseDto>(),
            UpdateCustomFieldError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
