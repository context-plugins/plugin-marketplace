using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Screen;

namespace Deliverd.Api;

public sealed class Screen
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Screen(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Screen text before it goes to an AI model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ScreenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ScreenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category data and the organisation's own terms, and decides against what the AI register approves the model (<c>aiSystemId</c>) to receive: <c>allow</c>, <c>redact</c> (send <c>redactedText</c>), <c>ask</c> (a person decides through the approval in <c>approval</c>; send the original only once it is approved) or <c>deny</c>. Send <c>text</c>, screened in memory and never stored, or <c>counts</c>, what the SDK found on the caller's machine, so the text never leaves it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only (<c>mode: report_only</c>): it runs and is audited, <c>verdict</c> is always <c>allow</c>, and <c>wouldBe</c> says what a paid plan would have done. A net, not a guarantee: names are not reliably found.
    /// </remarks>
    public Task<ApiV1ScreenResponse> PostApiV1Screen(PostApiV1ScreenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/screen"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ScreenResponse>(),
            PostApiV1ScreenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
