using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Extensions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Licensing;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Licensing Endpoints
/// </summary>
public sealed class Licensing
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Licensing(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get SPU consumption
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiSpuConsumptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1LicensingSpuConsumptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint returns the number of SPUs your organization consumed over a period.
    /// <para>
    /// Both bounds are inclusive whole days and any time component is discarded:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>from</c>: Optional. Defaults to the first day of the current calendar month.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>to</c>: Optional. Defaults to today.</description></item>
    /// </list>
    /// <para>
    /// Only organizations on SPU-based licensing accumulate consumption; others always read zero.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Licensing</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiSpuConsumptionResponse> GetApiV1LicensingSpuConsumption(GetApiV1LicensingSpuConsumptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/licensing/spuConsumption"),
            [],
            [new Param("from", request.From?.ToIso8601()), new Param("to", request.To?.ToIso8601())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiSpuConsumptionResponse>(),
            GetApiV1LicensingSpuConsumptionError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
