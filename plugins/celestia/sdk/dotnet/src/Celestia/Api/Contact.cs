using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Celestia.Core;
using Celestia.Core.Authentication;
using Celestia.Core.Exceptions;
using Celestia.Core.Models;
using Celestia.Core.Request;
using Celestia.Core.Response;
using Celestia.Errors;
using Celestia.Models;
using Celestia.Requests.Contact;

namespace Celestia.Api;

public sealed class Contact
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Contact(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Submit a contact inquiry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Success"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitWebsiteContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration is not configured, the existing development fallback logs the inquiry and returns success with an explicit message; that response does not confirm delivery. Submit only with user consent.
    /// </remarks>
    public Task<Success> SubmitWebsiteContact(SubmitWebsiteContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCelestiaWebsiteContactApi("/api/contact/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Success>(),
            SubmitWebsiteContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
