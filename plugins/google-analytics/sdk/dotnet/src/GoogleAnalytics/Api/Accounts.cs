using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleAnalytics.Core;
using GoogleAnalytics.Core.Authentication;
using GoogleAnalytics.Core.Exceptions;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Core.Request;
using GoogleAnalytics.Core.Response;
using GoogleAnalytics.Errors;
using GoogleAnalytics.Models;
using GoogleAnalytics.Requests.Accounts;

namespace GoogleAnalytics.Api;

public sealed class Accounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Accounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
    /// </remarks>
    public Task<object> AnalyticsadminAccountsDelete(AnalyticsadminAccountsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminAccountsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single Account.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaAccount> AnalyticsadminAccountsGet(AnalyticsadminAccountsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaAccount>(),
            AnalyticsadminAccountsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get data sharing settings accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataSharingSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsGetDataSharingSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get data sharing settings on an account. Data sharing settings are singletons.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataSharingSettings> AnalyticsadminAccountsGetDataSharingSettings(AnalyticsadminAccountsGetDataSharingSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}/dataSharingSettings"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataSharingSettings>(),
            AnalyticsadminAccountsGetDataSharingSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using <c>ListAccountSummaries</c>.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListAccountsResponse> AnalyticsadminAccountsList(AnalyticsadminAccountsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts"),
            [],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("showDeleted", request.ShowDeleted),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListAccountsResponse>(),
            AnalyticsadminAccountsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an account.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaAccount> AnalyticsadminAccountsPatch(AnalyticsadminAccountsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaAccount>(),
            AnalyticsadminAccountsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Provision account ticket accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsProvisionAccountTicketError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requests a ticket for creating an account.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse> AnalyticsadminAccountsProvisionAccountTicket(AnalyticsadminAccountsProvisionAccountTicketRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts:provisionAccountTicket"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse>(),
            AnalyticsadminAccountsProvisionAccountTicketError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run access report accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaRunAccessReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsRunAccessReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &amp; Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaRunAccessReportResponse> AnalyticsadminAccountsRunAccessReport(AnalyticsadminAccountsRunAccessReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}:runAccessReport"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaRunAccessReportResponse>(),
            AnalyticsadminAccountsRunAccessReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search change history events accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountsSearchChangeHistoryEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse> AnalyticsadminAccountsSearchChangeHistoryEvents(AnalyticsadminAccountsSearchChangeHistoryEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accounts/{accountsId}:searchChangeHistoryEvents"),
            [new TemplateParam("accountsId", request.AccountsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse>(),
            AnalyticsadminAccountsSearchChangeHistoryEventsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
