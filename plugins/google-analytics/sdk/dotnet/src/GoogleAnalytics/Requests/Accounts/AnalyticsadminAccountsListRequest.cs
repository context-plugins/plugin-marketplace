namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsList operation.
/// </summary>
public sealed record AnalyticsadminAccountsListRequest
{
    /// <summary>
    /// Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListAccounts</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListAccounts</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
    /// </summary>
    public bool? ShowDeleted { get; init; }
}
