using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Instruments;

namespace Upstox.Api;

public sealed class Instruments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Instruments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search instruments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchInstrumentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchInstrumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the instrument details for searched query
    /// </remarks>
    public Task<SearchInstrumentResponse> SearchInstrument(SearchInstrumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/instruments/search"),
            [],
            [
                new Param("query", request.Query),
                new Param("exchanges", request.Exchanges),
                new Param("segments", request.Segments),
                new Param("instrument_types", request.InstrumentTypes),
                new Param("expiry", request.Expiry),
                new Param("atm_offset", request.AtmOffset),
                new Param("page_number", request.PageNumber),
                new Param("records", request.Records),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchInstrumentResponse>(),
            SearchInstrumentError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
