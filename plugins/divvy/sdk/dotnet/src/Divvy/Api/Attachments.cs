using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Attachments;

namespace Divvy.Api;

public sealed class Attachments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Attachments(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Upload customer attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload an attachment for an existing customer. The file size limit is 6 MB.
    /// <para>
    /// <b>Note</b>: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.
    /// </para>
    /// <para>
    /// See Documents and attachments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<AttachmentResponseDto> CreateCustomerAttachment(CreateCustomerAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [new Param("name", request.Name)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AttachmentResponseDto>(),
            CreateCustomerAttachmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload invoice attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInvoiceAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload an attachment for an existing invoice. The file size limit is 6 MB.
    /// <para>
    /// <b>Note</b>: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.
    /// </para>
    /// <para>
    /// See Documents and attachments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<AttachmentResponseDto> CreateInvoiceAttachment(CreateInvoiceAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/invoices/{invoiceId}"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [new Param("name", request.Name), new Param("replaceInvoicePdf", request.ReplaceInvoicePdf)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AttachmentResponseDto>(),
            CreateInvoiceAttachmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload vendor attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVendorAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload an attachment for an existing vendor. The file size limit is 6 MB.
    /// <para>
    /// <b>Note</b>: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.
    /// </para>
    /// <para>
    /// See Documents and attachments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<AttachmentResponseDto> CreateVendorAttachment(CreateVendorAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/vendors/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [new Param("name", request.Name)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AttachmentResponseDto>(),
            CreateVendorAttachmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not available in the list of attachments.
    /// </remarks>
    public Task<StatusDto> DeleteAttachment(DeleteAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/{attachmentId}"),
            [new TemplateParam("attachmentId", request.AttachmentId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<StatusDto>(),
            DeleteAttachmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attachment details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an attachment.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the attachment.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
    /// </code>
    /// </remarks>
    public Task<AttachmentResponseDto> GetAttachment(GetAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/{attachmentId}"),
            [new TemplateParam("attachmentId", request.AttachmentId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AttachmentResponseDto>(),
            GetAttachmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of customer attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoAttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerAttachmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of attachments associated with a customer.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the attachment.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
    /// </code>
    /// </remarks>
    public Task<ListResponseDtoAttachmentResponseDto> ListCustomerAttachments(ListCustomerAttachmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [new Param("max", request.Max), new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoAttachmentResponseDto>(),
            ListCustomerAttachmentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of invoice attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoAttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInvoiceAttachmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of attachments associated with an invoice.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the attachment.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
    /// </code>
    /// </remarks>
    public Task<ListResponseDtoAttachmentResponseDto> ListInvoiceAttachments(ListInvoiceAttachmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/invoices/{invoiceId}"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [new Param("max", request.Max), new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoAttachmentResponseDto>(),
            ListInvoiceAttachmentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of vendor attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoAttachmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVendorAttachmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of attachments associated with a vendor.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the attachment.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
    /// </code>
    /// </remarks>
    public Task<ListResponseDtoAttachmentResponseDto> ListVendorAttachments(ListVendorAttachmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/attachments/vendors/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [new Param("max", request.Max), new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoAttachmentResponseDto>(),
            ListVendorAttachmentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
