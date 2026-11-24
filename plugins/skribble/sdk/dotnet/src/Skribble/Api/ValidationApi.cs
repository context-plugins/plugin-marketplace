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
using Skribble.Requests.ValidationApi;

namespace Skribble.Api;

/// <summary>
/// Endpoints to validate documents, data formats, and signatures.
/// </summary>
public sealed class ValidationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ValidationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Deletes the validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the corresponding resource identified by {id}, universal for all
    /// validation resources. Any resource that is not manually deleted will be
    /// automatically deleted after 10 minutes.
    /// </remarks>
    public Task DeleteValidation(DeleteValidationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/validate/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteValidationError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate a digitally signed content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentValidationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostValidateDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate signatures in digitally signed content, such as a PDF or XML file.
    /// A validation ID {id} is returned that can be used to call additional
    /// endpoints. The content to be validated is provided in the request body and
    /// is not retained within our service. The maximum request or file size is
    /// 50MB. Request parameters can be used to set optional parameters to control
    /// the validation
    /// </remarks>
    public Task<DocumentValidationResponse> PostValidateDocument(PostValidateDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/validate/document"),
            [],
            [
                new Param("quality", request.Quality),
                new Param("longTermValidation", request.LongTermValidation),
                new Param("legislation", request.Legislation),
                new Param("infos", request.Infos),
                new Param("rejectVisualDifferences", request.RejectVisualDifferences),
                new Param("rejectUndefinedChanges", request.RejectUndefinedChanges),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("content", request.Content)),
            JsonResponse.Create<DocumentValidationResponse>(),
            PostValidateDocumentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate a digital signature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureValidationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostValidateSignatureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate digital signatures such as CMS and CAdES without providing the
    /// associated signed content. A validation ID {id} is returned that can be used
    /// to call additional endpoints. The signature to be validated is provided in
    /// the request body. Query parameters can be used to set optional parameters to
    /// control the validation.
    /// </remarks>
    public Task<SignatureValidationResponse> PostValidateSignature(PostValidateSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/validate/signature"),
            [],
            [
                new Param("quality", request.Quality),
                new Param("longTermValidation", request.LongTermValidation),
                new Param("legislation", request.Legislation),
                new Param("infos", request.Infos),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("content", request.Content)),
            JsonResponse.Create<SignatureValidationResponse>(),
            PostValidateSignatureError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
