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
using Mailboxlayer.Requests.BulkCheck;

namespace Mailboxlayer.Api;

public sealed class BulkCheck
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BulkCheck(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk Validate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCheckEmailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk validation accepts a comma-separated list of email addresses in the <c>emails</c> query parameter (e.g. <c>emails=a@x.com,b@y.com,…</c>).
    /// </remarks>
    public Task<BulkCheckResponse> BulkCheckEmails(BulkCheckEmailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk_check"),
            [],
            [
                new Param("access_key", request.AccessKey),
                new Param("emails", request.Emails),
                new Param("smtp", request.Smtp),
                new Param("catch_all", request.CatchAll),
                new Param("format", request.Format),
                new Param("callback", request.Callback),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCheckResponse>(),
            BulkCheckEmailsError.Response,
            _auth.AccessKeyQuery,
            requestOptions,
            cancellationToken);
}
