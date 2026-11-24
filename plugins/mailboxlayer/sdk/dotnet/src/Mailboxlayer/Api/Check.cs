using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Mailboxlayer.Core;
using Mailboxlayer.Core.Exceptions;
using Mailboxlayer.Core.Models;
using Mailboxlayer.Core.Request;
using Mailboxlayer.Core.Response;
using Mailboxlayer.Errors;
using Mailboxlayer.Models.AnyOf;
using Mailboxlayer.Requests.Check;

namespace Mailboxlayer.Api;

public sealed class Check
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Check(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Validate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform an email validation for a single email address.
    /// </remarks>
    public Task<CheckResponse> CheckEmail(CheckEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/check"),
            [],
            [
                new Param("access_key", request.AccessKey),
                new Param("email", request.Email),
                new Param("smtp", request.Smtp),
                new Param("catch_all", request.CatchAll),
                new Param("format", request.Format),
                new Param("callback", request.Callback),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckResponse>(),
            CheckEmailError.Response,
            _auth.AccessKeyQuery,
            requestOptions,
            cancellationToken);
}
