using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Jid.Core;
using Jid.Core.Authentication;
using Jid.Core.Exceptions;
using Jid.Core.Models;
using Jid.Core.Request;
using Jid.Core.Response;
using Jid.Errors;
using Jid.Models;
using Jid.Requests.Search;

namespace Jid.Api;

public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Search(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Resolve a name or registry number to candidate files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchBusinessesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers, French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5 business units, filed on demand, listed first).
    /// </remarks>
    public Task<SearchResponse> SearchBusinesses(SearchBusinessesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/search"),
            [],
            [new Param("q", request.Q), new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResponse>(),
            SearchBusinessesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
