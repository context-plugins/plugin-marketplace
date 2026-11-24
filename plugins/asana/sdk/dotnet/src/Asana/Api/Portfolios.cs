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
using Asana.Requests.Portfolios;

namespace Asana.Api;

/// <summary>
/// A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent status update.
/// Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
/// </summary>
public sealed class Portfolios
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Portfolios(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a custom field to a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosAddCustomFieldSettingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCustomFieldSettingForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Custom fields are associated with portfolios by way of custom field settings. This method creates a setting for the portfolio.
    /// </remarks>
    public Task<PortfoliosAddCustomFieldSettingResponse> AddCustomFieldSettingForPortfolio(AddCustomFieldSettingForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/addCustomFieldSetting"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [new Param("opt_pretty", request.OptPretty)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosAddCustomFieldSettingResponse>(),
            AddCustomFieldSettingForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a portfolio item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosAddItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddItemForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an item to a portfolio.
    /// Returns an empty data block.
    /// </remarks>
    public Task<PortfoliosAddItemResponse> AddItemForPortfolio(AddItemForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/addItem"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosAddItemResponse>(),
            AddItemForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add users to a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosAddMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddMembersForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified list of users as members of the portfolio.
    /// Returns the updated portfolio record.
    /// </remarks>
    public Task<PortfoliosAddMembersResponse> AddMembersForPortfolio(AddMembersForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/addMembers"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosAddMembersResponse>(),
            AddMembersForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new portfolio in the given workspace with the supplied name.
    /// <para>
    /// Note that portfolios created in the Asana UI may have some state
    /// (like the “Priority” custom field) which is automatically added
    /// to the portfolio when it is created. Portfolios created via our
    /// API will *not* be created with the same initial state to allow
    /// integrations to create their own starting state on a portfolio.
    /// </para>
    /// </remarks>
    public Task<PortfoliosResponse1> CreatePortfolio(CreatePortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosResponse1>(),
            CreatePortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing portfolio can be deleted by making a DELETE request on
    /// the URL for that portfolio.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<PortfoliosResponse4> DeletePortfolio(DeletePortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosResponse4>(),
            DeletePortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get portfolio items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosItemsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetItemsForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the items in compact form in a portfolio.
    /// </remarks>
    public Task<PortfoliosItemsResponse> GetItemsForPortfolio(GetItemsForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/items"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosItemsResponse>(),
            GetItemsForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete portfolio record for a single portfolio.
    /// </remarks>
    public Task<PortfoliosResponse1> GetPortfolio(GetPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosResponse1>(),
            GetPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple portfolios
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfoliosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the portfolios in compact representation that are owned by the current API user.
    /// </remarks>
    public Task<PortfoliosResponse> GetPortfolios(GetPortfoliosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios"),
            [],
            [
                new Param("workspace", request.Workspace),
                new Param("owner", request.Owner),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosResponse>(),
            GetPortfoliosError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a custom field from a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosRemoveCustomFieldSettingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveCustomFieldSettingForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a custom field setting from a portfolio.
    /// </remarks>
    public Task<PortfoliosRemoveCustomFieldSettingResponse> RemoveCustomFieldSettingForPortfolio(RemoveCustomFieldSettingForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/removeCustomFieldSetting"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [new Param("opt_pretty", request.OptPretty)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosRemoveCustomFieldSettingResponse>(),
            RemoveCustomFieldSettingForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a portfolio item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosRemoveItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveItemForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an item from a portfolio.
    /// Returns an empty data block.
    /// </remarks>
    public Task<PortfoliosRemoveItemResponse> RemoveItemForPortfolio(RemoveItemForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/removeItem"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosRemoveItemResponse>(),
            RemoveItemForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove users from a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosRemoveMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveMembersForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified list of users from members of the portfolio.
    /// Returns the updated portfolio record.
    /// </remarks>
    public Task<PortfoliosRemoveMembersResponse> RemoveMembersForPortfolio(RemoveMembersForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/removeMembers"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosRemoveMembersResponse>(),
            RemoveMembersForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing portfolio can be updated by making a PUT request on the URL for
    /// that portfolio. Only the fields provided in the <c>data</c> block will be updated;
    /// any unspecified fields will remain unchanged.
    /// <para>
    /// Returns the complete updated portfolio record.
    /// </para>
    /// </remarks>
    public Task<PortfoliosResponse1> UpdatePortfolio(UpdatePortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PortfoliosResponse1>(),
            UpdatePortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
