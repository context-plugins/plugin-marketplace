using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.OrganizationsApi;

namespace Bitly.Api;

/// <summary>
/// Organizations are equivalent to a Bitly account. Every plan limit, group, and user is tied to an organization.
/// </summary>
public sealed class OrganizationsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OrganizationsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an Organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Organization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrive details for the specified organization.
    /// </remarks>
    public Task<Organization> GetOrganization(GetOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{organization_guid}"),
            [new TemplateParam("organization_guid", request.OrganizationGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Organization>(),
            GetOrganizationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Shorten Counts for an Organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Metrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationShortenCountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the shorten counts for a specific organization over a specified time period.
    /// </remarks>
    public Task<Metrics> GetOrganizationShortenCounts(GetOrganizationShortenCountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{organization_guid}/shorten_counts"),
            [new TemplateParam("organization_guid", request.OrganizationGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Metrics>(),
            GetOrganizationShortenCountsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Shorten Counts for an Organization by Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Metrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationShortenCountsByGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the shorten counts for a specific organization by group for the current month.
    /// </remarks>
    public Task<Metrics> GetOrganizationShortenCountsByGroup(GetOrganizationShortenCountsByGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{organization_guid}/shorten_counts_by_group"),
            [new TemplateParam("organization_guid", request.OrganizationGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Metrics>(),
            GetOrganizationShortenCountsByGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Organizations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa) when configured.
    /// </remarks>
    public Task<Organizations> GetOrganizations(GetOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations"),
            [],
            [new Param("include_all", request.IncludeAll)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Organizations>(),
            GetOrganizationsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Plan Limits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlanLimits"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlanLimitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all plan limits and counts available for an organization.
    /// </remarks>
    public Task<PlanLimits> GetPlanLimits(GetPlanLimitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{organization_guid}/plan_limits"),
            [new TemplateParam("organization_guid", request.OrganizationGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlanLimits>(),
            GetPlanLimitsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
