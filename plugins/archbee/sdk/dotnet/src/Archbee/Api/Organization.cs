using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;

namespace Archbee.Api;

/// <summary>
/// Organization-level export and display rules
/// </summary>
public sealed class Organization
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Organization(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Organization Display Rules
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamDisplayRulesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationDisplayRulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Export a list of display rules.
    /// </remarks>
    public Task<TeamDisplayRulesResponse> OrganizationDisplayRules(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/team/display-rules"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamDisplayRulesResponse>(),
            OrganizationDisplayRulesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Organization Export
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output
    /// </remarks>
    public Task OrganizationExport(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/team/export"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            OrganizationExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
