using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.PerfectScaleForCommitmentsGeneral;

namespace DoiT.Api;

/// <summary>
/// Cloud-agnostic PerfectScale for Commitments resources — commitment policies shared by AWS and GCP.
/// </summary>
public sealed class PerfectScaleForCommitmentsGeneral
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PerfectScaleForCommitmentsGeneral(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a commitment policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommitmentPolicyDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCommitmentPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one commitment policy by id, with its creation and last-update times and the list of
    /// account × product-line scopes it is explicitly assigned to across AWS and GCP.
    /// <para>
    /// <c>assignments</c> lists explicit assignments only. An account whose settings have not yet been
    /// materialized falls back to <c>balanced</c> implicitly and does not appear here, even though the
    /// settings endpoints report it as <c>balanced</c>. On AWS the assignment is currently recorded per
    /// tenant and applied to every onboarded organization, so each organization appears once per
    /// product line. The list is not paginated.
    /// </para>
    /// <para>
    /// Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be
    /// queried the request fails rather than returning a partial list.
    /// </para>
    /// </remarks>
    public Task<CommitmentPolicyDetail> GetCommitmentPolicy(GetCommitmentPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/general/policies/{policyId}"),
            [new TemplateParam("policyId", request.PolicyId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CommitmentPolicyDetail>(),
            GetCommitmentPolicyError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commitment policies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GeneralPoliciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCommitmentPoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns every commitment policy available to the tenant: the three built-in policies
    /// (<c>conservative</c>, <c>balanced</c>, <c>max_savings</c>) followed by the tenant's own custom policies.
    /// <para>
    /// Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the
    /// same policy may be assigned to AWS and GCP product lines alike.
    /// </para>
    /// <para>
    /// Built-in policies are listed first, ordered from least to most aggressive target coverage;
    /// custom policies follow in creation order. Percentage parameters are expressed as <c>1</c>–<c>100</c>, as
    /// entered in the DoiT Console. This differs from the coverage and utilization fields on
    /// recommendations and inventory, which are fractions from 0 to 1.
    /// </para>
    /// <para>
    /// This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT
    /// Console on the Commitment Policies page.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GeneralPoliciesResponse> ListCommitmentPolicies(ListCommitmentPoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/general/policies"),
            [],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GeneralPoliciesResponse>(),
            ListCommitmentPoliciesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
