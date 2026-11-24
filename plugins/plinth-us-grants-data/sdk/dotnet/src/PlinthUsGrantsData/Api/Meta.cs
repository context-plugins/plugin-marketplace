using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Meta;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Dataset scope, source freshness, and which Candid parameters this API honors. No key required.
/// </summary>
public sealed class Meta
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Meta(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Dataset scope, freshness and the Candid compatibility matrix
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to Candid's <c>last_updated</c> filter: there is no per-row change stamp because the dataset is rebuilt as a whole from monthly IRS releases, so a client keeping its own copy in sync watches <c>dataset.version</c> and the fiscal year span here and re-pulls when either moves. Keyless and unmetered.
    /// <para>
    /// <b><c>scope</c> carries TWO fiscal-year ends and they are not the same number.</b> <c>last_fiscal_year</c> is the newest year any row falls in — sync against this. <c>last_complete_fiscal_year</c> is the newest year that has finished arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so the corpus always holds a few hundred early filings for a year that has barely begun. <c>partial_fiscal_years</c> names every year still filling. Reporting <c>last_fiscal_year</c> as the coverage span overstates it by a year or two.
    /// </para>
    /// </remarks>
    public Task<MetaResponse> GetMeta(GetMetaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta"),
            [],
            [new Param("jurisdiction", request.Jurisdiction)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetaResponse>(),
            GetMetaError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
