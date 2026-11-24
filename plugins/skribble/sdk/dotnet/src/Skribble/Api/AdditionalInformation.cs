using System.Collections.Generic;
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
using Skribble.Requests.AdditionalInformation;

namespace Skribble.Api;

/// <summary>
/// Endpoints providing extra metadata or supplementary details for documents.
/// </summary>
public sealed class AdditionalInformation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AdditionalInformation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get additional information about the document format
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormatInfosResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInfosFormatError"/> when the server returns an error response.</exception>
    public Task<FormatInfosResponse> GetInfosFormat(GetInfosFormatRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/infos/{id}/format"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormatInfosResponse>(),
            GetInfosFormatError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get additional information about the signers of a validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Signer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInfosSignersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Additional information about the people who signed the document. The query
    /// parameter is the id from the validation endpoint.
    /// </remarks>
    public Task<IReadOnlyList<Signer>> GetInfosSigners(GetInfosSignersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/infos/{id}/signers"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Signer>>(),
            GetInfosSignersError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get additional information about the validation itself.
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValidationInfosResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInfosValidationError"/> when the server returns an error response.</exception>
    public Task<ValidationInfosResponse> GetInfosValidation(GetInfosValidationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/infos/{id}/validation"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValidationInfosResponse>(),
            GetInfosValidationError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
