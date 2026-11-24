using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.Seal;

namespace Skribble.Api;

/// <summary>
/// Endpoints for applying electronic seals to documents.
/// </summary>
public sealed class Seal
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Seal(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Seal a Document with a Legal Entity Signature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSealResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SealDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a document and affixes an electronic seal in a single call.
    /// <para>
    /// Optionally, a visual signature can also be placed on the document.
    /// </para>
    /// <para>
    /// The response contains the <c>document_id</c> of the newly created sealed
    /// document, which can be used to retrieve it.
    /// </para>
    /// </remarks>
    public Task<CreateSealResponse> SealDocument(SealDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSealApi("/seal"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateSealResponse>(),
            SealDocumentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
