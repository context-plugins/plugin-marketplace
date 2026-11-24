using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.ProfessionalsAndLicenses;

namespace CommonElements.Api;

public sealed class ProfessionalsAndLicenses
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProfessionalsAndLicenses(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Verify a professional license against the state board roll by license number…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1LicensesVerifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LicensesVerifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verify a professional license against the state board roll by license number, or by name when you do not have the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can still be past its expiry date.
    /// <list type="bullet">
    ///   <item><description>Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date has already passed.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1LicensesVerifyResponse> LicensesVerify(LicensesVerifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/licenses/verify"),
            [],
            [
                new Param("state", request.State),
                new Param("license_number", request.LicenseNumber),
                new Param("name", request.Name),
                new Param("license_type", request.LicenseType),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1LicensesVerifyResponse>(),
            LicensesVerifyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The communities a professional or firm is on record serving: the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ProfessionalsAssociationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProfessionalsAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed relationship edges with name-matched rows from the public management registry, de-duplicated, with the provenance of each row.
    /// <list type="bullet">
    ///   <item><description>Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name matching.</description></item>
    ///   <item><description>When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ProfessionalsAssociationsResponse> ProfessionalsAssociations(ProfessionalsAssociationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/professionals/{id}/associations"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ProfessionalsAssociationsResponse>(),
            ProfessionalsAssociationsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The full single-record projection for one licensed professional or firm…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ProfessionalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProfessionalsDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The full single-record projection for one licensed professional or firm, including the city/county/zip of record and the linked Common Elements organization. The street address is not returned: a licence with no firm and no d/b/a is an individual, and that address is overwhelmingly a home.
    /// <list type="bullet">
    ///   <item><description>Business address of record only. No personal email or phone is returned by any Common Elements endpoint.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ProfessionalsResponse> ProfessionalsDetail(ProfessionalsDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/professionals/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ProfessionalsResponse>(),
            ProfessionalsDetailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search the licensed professional graph: community association managers…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ProfessionalsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProfessionalsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search the licensed professional graph: community association managers, contractors, engineers, and the firms they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be paged unfiltered. Omitting all four returns a 400.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ProfessionalsSearchResponse> ProfessionalsSearch(ProfessionalsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/professionals/search"),
            [],
            [
                new Param("q", request.Q),
                new Param("state", request.State),
                new Param("license_type", request.LicenseType),
                new Param("board", request.Board),
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ProfessionalsSearchResponse>(),
            ProfessionalsSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
