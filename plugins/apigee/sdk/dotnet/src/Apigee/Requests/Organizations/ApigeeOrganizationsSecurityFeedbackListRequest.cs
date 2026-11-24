namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityFeedbackList operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityFeedbackListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. The maximum number of feedback reports to return. The service may return fewer than this value. LINT.IfChange(documented_page_size_limits) If unspecified, at most 10 feedback reports will be returned. The maximum value is 100; values above 100 will be coerced to 100. LINT.ThenChange( //depot/google3/edge/sense/boq/service/v1/securityfeedback/securityfeedback_rpc.go:page_size_limits )
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListSecurityFeedback</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListSecurityFeedback</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
