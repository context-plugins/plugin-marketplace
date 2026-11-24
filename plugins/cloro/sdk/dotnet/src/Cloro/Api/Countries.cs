using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core;
using Cloro.Core.Exceptions;
using Cloro.Core.Models;
using Cloro.Core.Request;
using Cloro.Core.Response;
using Cloro.Errors;
using Cloro.Requests.Countries;

namespace Cloro.Api;

public sealed class Countries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Countries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List of countries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries available for specific AI providers.
    /// </remarks>
    public Task<IReadOnlyList<string>> GetCountries(GetCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countries"),
            [],
            [new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            GetCountriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
