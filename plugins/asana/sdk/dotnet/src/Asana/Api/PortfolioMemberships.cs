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
using Asana.Requests.PortfolioMemberships;

namespace Asana.Api;

/// <summary>
/// This object determines if a user is a member of a portfolio.
/// </summary>
public sealed class PortfolioMemberships
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PortfolioMemberships(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a portfolio membership
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfolioMembershipsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioMembershipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete portfolio record for a single portfolio membership.
    /// </remarks>
    public Task<PortfolioMembershipsResponse1> GetPortfolioMembership(GetPortfolioMembershipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolio_memberships/{portfolio_membership_gid}"),
            [new TemplateParam("portfolio_membership_gid", request.PortfolioMembershipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfolioMembershipsResponse1>(),
            GetPortfolioMembershipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple portfolio memberships
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfolioMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioMembershipsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of portfolio memberships in compact representation. You must specify <c>portfolio</c>, <c>portfolio</c> and <c>user</c>, or <c>workspace</c> and <c>user</c>.
    /// </remarks>
    public Task<PortfolioMembershipsResponse> GetPortfolioMemberships(GetPortfolioMembershipsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolio_memberships"),
            [],
            [
                new Param("portfolio", request.Portfolio),
                new Param("workspace", request.Workspace),
                new Param("user", request.User),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfolioMembershipsResponse>(),
            GetPortfolioMembershipsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get memberships from a portfolio
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosPortfolioMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioMembershipsForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact portfolio membership records for the portfolio.
    /// </remarks>
    public Task<PortfoliosPortfolioMembershipsResponse> GetPortfolioMembershipsForPortfolio(GetPortfolioMembershipsForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/portfolio_memberships"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("user", request.User),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosPortfolioMembershipsResponse>(),
            GetPortfolioMembershipsForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
