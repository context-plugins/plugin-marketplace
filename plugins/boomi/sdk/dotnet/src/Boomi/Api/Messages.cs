using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Messages;

namespace Boomi.Api;

/// <summary>
/// Endpoints for producing messages to Boomi Event Streams topics via HTTP REST calls.
/// </summary>
public sealed class Messages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Messages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Publish messages to a topic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishMessagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode (predefined JSON format with payload and properties fields) and single message mode (original format in plain text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate limited to 60,000 requests per IP per 5-minute window.
    /// </remarks>
    public Task<PublishResponse> PublishMessages(PublishMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiEventStreamsRestMessagesApi("/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublishResponse>(),
            PublishMessagesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
