using System;
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
using Skribble.Requests.SignatureHandling;

namespace Skribble.Api;

/// <summary>
/// Endpoints for handling signature requests and callbacks.
/// </summary>
public sealed class SignatureHandling
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignatureHandling(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Signature Requests by bulk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SignatureResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkGetSignatureRequestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves multiple <c>SignatureRequest</c> objects in a single call.
    /// <para>
    /// Provide a JSON array of <c>SignatureRequest</c> IDs in the request body to specify which
    /// records to fetch. The response includes only the <c>SignatureRequests</c> that were
    /// successfully found. IDs that do not match any existing record are silently ignored.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<SignatureResponse>> BulkGetSignatureRequests(BulkGetSignatureRequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<SignatureResponse>>(),
            BulkGetSignatureRequestsError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Clear the expiry date of a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSignatureRequestExpiresAtError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <b>Early access.</b> This endpoint is available to opted-in businesses only. To request
    /// access, contact support@skribble.com.
    /// <para>
    /// Clearing the expiry requires the signature-request expiry feature to be enabled
    /// for the business. If it is not, the request fails with <c>403 Forbidden</c>
    /// (problem type <c>feature-not-enabled</c>).
    /// </para>
    /// <para>
    /// Clears the owner-set <c>expires_at</c> date from a <c>SignatureRequest</c> in
    /// <c>status_overall=DRAFT</c>.
    /// </para>
    /// <para>
    /// After this call the <c>SignatureRequest</c> no longer has an owner-set expiry.
    /// The <c>auto_delete_at</c> retention date (if any) is unaffected.
    /// </para>
    /// <para>
    /// <b>Constraints</b>
    /// </para>
    /// <para>
    /// - Only allowed while <c>status_overall=DRAFT</c>. Calling this on a
    /// non-<c>DRAFT</c> request returns <c>400 Bad Request</c>.
    /// - Requires the same write access as updating the <c>SignatureRequest</c>.
    /// </para>
    /// </remarks>
    public Task DeleteSignatureRequestExpiresAt(DeleteSignatureRequestExpiresAtRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/expires-at"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSignatureRequestExpiresAtError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Signature Request Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides the signature report for a specific signature request.
    /// <para>
    /// By default, the report is returned as a human-readable, digitally signed
    /// PDF document. Optionally, the report format can be changed using the
    /// <c>type</c> query parameter (e.g. JSON or HTML).
    /// </para>
    /// <para>
    /// The report contains all relevant information about the signature process,
    /// including signatories, timestamps, and verification details. It serves as
    /// legally valid proof of the completed signing process and can be stored or
    /// shared for auditing, compliance, or record-keeping purposes.
    /// </para>
    /// </remarks>
    public Task<BinaryContent> GetSignatureReport(GetSignatureReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/report"),
            [new TemplateParam("SR_ID", request.SrId)],
            [new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetSignatureReportError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List and find Signature Requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all <c>SignatureRequest</c> objects that the current user has sufficient
    /// access rights to.
    /// <para>
    /// <b>Filter</b>
    /// </para>
    /// <para>
    /// You can optionally filter results using one or more of the optional
    /// parameters.
    /// </para>
    /// <para>
    /// Filters search for an exact match of the corresponding field value. This
    /// means the filter is case-sensitive and will not match partial values. For
    /// example, _account_email=john.doe@skribble.com_ will only match a
    /// <c>SignatureRequest</c> where the <c>account_email</c> field is exactly
    /// john.doe@skribble.com and will not match another.john.doe@skribble.com.
    /// </para>
    /// <para>
    /// Exception: The <c>search</c> parameter searches for document titles that contain
    /// the search term.
    /// </para>
    /// <para>
    /// <b>Pagination</b>
    /// </para>
    /// <para>
    /// The result set can be controlled using the optional pagination parameters
    /// <c>page_number</c> and <c>page_size</c>, which helps prevent excessively large result
    /// sets.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<SignatureResponseV3>> GetSignatureRequest(GetSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests"),
            [],
            [
                new Param("account_email", request.AccountEmail),
                new Param("search", request.Search),
                new Param("signature_status", request.SignatureStatus),
                new Param("status_overall", request.StatusOverall),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<SignatureResponseV3>>(),
            GetSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get callback details for a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SignatureCallbacksInResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureRequestCallbacksV3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about the callbacks associated with a
    /// <c>SignatureRequest</c>. Use this endpoint to confirm whether a callback has been
    /// executed or to identify errors that occurred during the callback process.
    /// <para>
    /// <b>Result</b>
    /// </para>
    /// <para>
    /// If no callbacks have been triggered yet, the response will be an empty
    /// array. Otherwise, it contains an array of <c>callback</c> objects that have
    /// already been executed.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<SignatureCallbacksInResponse>> GetSignatureRequestCallbacksV3(GetSignatureRequestCallbacksV3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/callbacks"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<SignatureCallbacksInResponse>>(),
            GetSignatureRequestCallbacksV3Error.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureRequestDetails2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a <c>SignatureRequest</c> by its ID.
    /// </remarks>
    public Task<SignatureResponseV3> GetSignatureRequestDetails2(GetSignatureRequestDetails2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignatureResponseV3>(),
            GetSignatureRequestDetails2Error.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remind Open Signers of a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemindSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// In addition to the automatic signature reminders, manual reminders can also
    /// be initiated via the Skribble web application and also via the API.
    /// <para>
    /// This allows for greater flexibility in managing signature requests, ensuring
    /// that important documents are signed promptly. By using both automatic and
    /// manual reminders, you can tailor your approach to suit the specific needs of
    /// your users or customers.
    /// </para>
    /// <para>
    /// <b>Limits</b>
    /// </para>
    /// <para>
    /// There is an hourly limit on the number of signature reminders that can be
    /// sent. This limit ensures that reminders are used responsibly and prevents
    /// excessive notifications. Generally, this restriction should not affect you
    /// if you use this feature appropriately. By adhering to this limit, you can
    /// effectively manage your signature requests without overwhelming your users
    /// or customers with frequent reminders.
    /// </para>
    /// </remarks>
    public Task RemindSignatureRequest(RemindSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/remind"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemindSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing <c>SignatureRequest</c>. We recommend creating the <c>SignatureRequest</c>
    /// with all necessary information upfront and using this endpoint only when changes are
    /// required.
    /// <para>
    /// The following fields can be updated: <c>title</c>, <c>message</c>, <c>legislation</c>, <c>quality</c>,
    /// <c>signatures</c>, <c>callback_success_url</c>, <c>callback_error_url</c>, <c>callback_update_url</c>,
    /// <c>custom</c>, <c>attach_on_success</c>, <c>read_access</c>, and <c>write_access</c>.
    /// </para>
    /// <para>
    /// Observers are managed separately via the dedicated <c>/observers</c> endpoints.
    /// </para>
    /// <para>
    /// <b>Updating signers</b>
    /// </para>
    /// <para>
    /// To add or remove signers, provide the complete desired state of the <c>signatures</c> array:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>To add a signer, include the new entry alongside all existing signers.</description></item>
    ///   <item><description>To remove a signer, omit their entry from the array.</description></item>
    /// </list>
    /// <para>
    /// Alternatively, use the dedicated <c>/signatures</c> endpoints to add or remove individual
    /// signers without having to send the full list.
    /// </para>
    /// <para>
    /// &gt; <b>Important:</b> When updating via this endpoint, any signer not present in the
    /// <c>signatures</c> array will be removed. Changes to signers can only be made as long as
    /// none of the signers have already completed their signature.
    /// </para>
    /// </remarks>
    public Task<SignatureResponseV3> UpdateSignatureRequest(UpdateSignatureRequestOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureHandlingApi("/signature-requests"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureResponseV3>(),
            UpdateSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
