using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.GrantsApi;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// The funder-grantee graph: grants, funders, recipients and aggregates.
/// </summary>
public sealed class GrantsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GrantsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Rank funders by giving
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GrantsFundersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.
    /// </remarks>
    public Task<FundersResponse> GetApiV1GrantsFunders(GetApiV1GrantsFundersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/grants/funders"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("id_type", request.IdType),
                new Param("year", request.Year),
                new Param("min_year", request.MinYear),
                new Param("max_year", request.MaxYear),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("geo_id_type", request.GeoIdType),
                new Param("location_type", request.LocationType),
                new Param("country", request.Country),
                new Param("query", request.Query),
                new Param("support", request.Support),
                new Param("funder_type", request.FunderType),
                new Param("exclude", request.Exclude),
                new Param("exclude_daf", request.ExcludeDaf),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("min_match_prob", request.MinMatchProb),
                new Param("ein_source", request.EinSource),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("strict", request.Strict),
                new Param("format", request.Format),
                new Param("population", request.Population),
                new Param("transaction", request.Transaction),
                new Param("include_gov", request.IncludeGov),
                new Param("last_updated", request.LastUpdated),
                new Param("profile_levels", request.ProfileLevels),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
                new Param("sort_by", request.SortBy),
                new Param("sort_order", request.SortOrder),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundersResponse>(),
            GetApiV1GrantsFundersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rank recipients by what they received
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecipientsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GrantsRecipientsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.
    /// </remarks>
    public Task<RecipientsResponse> GetApiV1GrantsRecipients(GetApiV1GrantsRecipientsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/grants/recipients"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("id_type", request.IdType),
                new Param("year", request.Year),
                new Param("min_year", request.MinYear),
                new Param("max_year", request.MaxYear),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("geo_id_type", request.GeoIdType),
                new Param("location_type", request.LocationType),
                new Param("country", request.Country),
                new Param("query", request.Query),
                new Param("support", request.Support),
                new Param("funder_type", request.FunderType),
                new Param("exclude", request.Exclude),
                new Param("exclude_daf", request.ExcludeDaf),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("min_match_prob", request.MinMatchProb),
                new Param("ein_source", request.EinSource),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("strict", request.Strict),
                new Param("format", request.Format),
                new Param("population", request.Population),
                new Param("transaction", request.Transaction),
                new Param("include_gov", request.IncludeGov),
                new Param("last_updated", request.LastUpdated),
                new Param("profile_levels", request.ProfileLevels),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
                new Param("sort_by", request.SortBy),
                new Param("sort_order", request.SortOrder),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecipientsResponse>(),
            GetApiV1GrantsRecipientsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Aggregate totals for a filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GrantsSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.
    /// </remarks>
    public Task<SummaryResponse> GetApiV1GrantsSummary(GetApiV1GrantsSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/grants/summary"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("id_type", request.IdType),
                new Param("year", request.Year),
                new Param("min_year", request.MinYear),
                new Param("max_year", request.MaxYear),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("geo_id_type", request.GeoIdType),
                new Param("location_type", request.LocationType),
                new Param("country", request.Country),
                new Param("query", request.Query),
                new Param("support", request.Support),
                new Param("funder_type", request.FunderType),
                new Param("exclude", request.Exclude),
                new Param("exclude_daf", request.ExcludeDaf),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("min_match_prob", request.MinMatchProb),
                new Param("ein_source", request.EinSource),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("strict", request.Strict),
                new Param("format", request.Format),
                new Param("population", request.Population),
                new Param("transaction", request.Transaction),
                new Param("include_gov", request.IncludeGov),
                new Param("last_updated", request.LastUpdated),
                new Param("profile_levels", request.ProfileLevels),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummaryResponse>(),
            GetApiV1GrantsSummaryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List individual grants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GrantsTransactionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: <c>funder_id</c> for everything a foundation funded, <c>recip_id</c> for every funder behind a nonprofit.
    /// </remarks>
    public Task<TransactionsResponse> GetApiV1GrantsTransactions(GetApiV1GrantsTransactionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/grants/transactions"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("id_type", request.IdType),
                new Param("year", request.Year),
                new Param("min_year", request.MinYear),
                new Param("max_year", request.MaxYear),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("geo_id_type", request.GeoIdType),
                new Param("location_type", request.LocationType),
                new Param("country", request.Country),
                new Param("query", request.Query),
                new Param("support", request.Support),
                new Param("funder_type", request.FunderType),
                new Param("exclude", request.Exclude),
                new Param("exclude_daf", request.ExcludeDaf),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("min_match_prob", request.MinMatchProb),
                new Param("ein_source", request.EinSource),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("strict", request.Strict),
                new Param("format", request.Format),
                new Param("population", request.Population),
                new Param("transaction", request.Transaction),
                new Param("include_gov", request.IncludeGov),
                new Param("last_updated", request.LastUpdated),
                new Param("profile_levels", request.ProfileLevels),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
                new Param("sort_by", request.SortBy),
                new Param("sort_order", request.SortOrder),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionsResponse>(),
            GetApiV1GrantsTransactionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Aggregate totals for a filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGrantsSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.
    /// </remarks>
    public Task<object> GetGrantsSummary(GetGrantsSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/grants/summary"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("year", request.Year),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetGrantsSummaryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rank funders by giving
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFundersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.
    /// </remarks>
    public Task<object> ListFunders(ListFundersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/grants/funders"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("year", request.Year),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ListFundersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List individual grants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGrantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: <c>funder_id</c> for everything a foundation funded, <c>recip_id</c> for every funder behind a nonprofit.
    /// </remarks>
    public Task<object> ListGrants(ListGrantsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/grants/transactions"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("year", request.Year),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
                new Param("sort_by", request.SortBy),
                new Param("sort_order", request.SortOrder),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ListGrantsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rank recipients by what they received
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecipientsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.
    /// </remarks>
    public Task<object> ListRecipients(ListRecipientsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/grants/recipients"),
            [],
            [
                new Param("funder_id", request.FunderId),
                new Param("recip_id", request.RecipId),
                new Param("year", request.Year),
                new Param("subject", request.Subject),
                new Param("location", request.Location),
                new Param("min_amt", request.MinAmt),
                new Param("max_amt", request.MaxAmt),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ListRecipientsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
