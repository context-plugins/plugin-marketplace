using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.BillApprovals;

namespace Bill.Api;

public sealed class BillApprovals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal BillApprovals(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Approve or deny a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BillApproveDenyActionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each object represents a single bill along with its approval or denial status.
    /// </remarks>
    public Task<StatusDto> BillApproveDenyActions(BillApproveDenyActionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/actions"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StatusDto>(),
            BillApproveDenyActionsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a bill approval policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillApprovalPolicyResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillApprovalPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new bill approval policy.
    /// <para>
    /// In your request, set <c>rules</c> and <c>approvers</c> in the specified format. For example, to create a bill approval policy for all bills greater than or equal to <c>$1000</c>, set <c>rules</c> for <c>BILL_AMOUNT</c>.
    /// <code>
    /// {
    /// "policyName": "Approval policy for bills &gt;= $1000",
    /// "rules": [
    /// {
    /// "key": "BILL_AMOUNT",
    /// "op": "gte",
    /// "values": [
    /// "1000"
    /// ]
    /// }
    /// ],
    /// "approvers": [
    /// "{approver_user_id}"
    /// ]
    /// }
    /// </code>
    /// </para>
    /// </remarks>
    public Task<BillApprovalPolicyResponseDto> CreateBillApprovalPolicy(CreateBillApprovalPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/policies"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillApprovalPolicyResponseDto>(),
            CreateBillApprovalPolicyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a bill approval policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is not available in the list of approval policies.
    /// </remarks>
    public Task<StatusDto> DeletePolicy(DeletePolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/policies/{policyId}"),
            [new TemplateParam("policyId", request.PolicyId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<StatusDto>(),
            DeletePolicyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of bill approval policies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="BillApprovalPolicyResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillApprovalPoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bill approval policy objects.
    /// </remarks>
    public Task<IReadOnlyList<BillApprovalPolicyResponseDto>> ListBillApprovalPolicies(ListBillApprovalPoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/policies"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<BillApprovalPolicyResponseDto>>(),
            ListBillApprovalPoliciesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of bills pending approval
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBillUserApprovalsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillUserApprovalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are pending approval for the currently signed-in user.
    /// </remarks>
    public Task<ListBillUserApprovalsResponseDto> ListBillUserApprovals(ListBillUserApprovalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/pending-user-approvals"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListBillUserApprovalsResponseDto>(),
            ListBillUserApprovalsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a bill approval policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillApprovalPolicyResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBillApprovalPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing bill approval policy.
    /// </remarks>
    public Task<BillApprovalPolicyResponseDto> UpdateBillApprovalPolicy(UpdateBillApprovalPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bill-approvals/policies/{policyId}"),
            [new TemplateParam("policyId", request.PolicyId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillApprovalPolicyResponseDto>(),
            UpdateBillApprovalPolicyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
