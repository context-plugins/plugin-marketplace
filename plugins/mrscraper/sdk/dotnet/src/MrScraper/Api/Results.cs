using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Models;
using MrScraper.Requests.Results;

namespace MrScraper.Api;

public sealed class Results
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Results(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve full output data and metadata for a single stored result by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetApiV1ResultsResultidResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<GetApiV1ResultsResultidResponse> GetApiV1ResultsResultId(GetApiV1ResultsResultIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/results/{resultId}"),
            [new TemplateParam("resultId", request.ResultId)],
            [new Param("include_html", request.IncludeHtml)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetApiV1ResultsResultidResponse>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
