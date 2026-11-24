using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Documents;

namespace ApiVerve.Api;

public sealed class Documents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Documents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// HTML to PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HtmltopdfResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HtmltopdfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert HTML content to a PDF file
    /// </remarks>
    public Task<V1HtmltopdfResponse> Htmltopdf(HtmltopdfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/htmltopdf"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HtmltopdfResponse>(),
            HtmltopdfError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invoice Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InvoicegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InvoicegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate an invoice
    /// </remarks>
    public Task<V1InvoicegeneratorResponse> Invoicegenerator(InvoicegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/invoicegenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1InvoicegeneratorResponse>(),
            InvoicegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Website to PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebsitetopdfResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebsitetopdfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a website to a PDF file
    /// </remarks>
    public Task<V1WebsitetopdfResponse> Websitetopdf(WebsitetopdfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/websitetopdf"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WebsitetopdfResponse>(),
            WebsitetopdfError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
