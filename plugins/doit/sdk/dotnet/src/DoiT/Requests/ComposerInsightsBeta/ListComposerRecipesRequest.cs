using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.ComposerInsightsBeta;

/// <summary>
/// The inputs of the ListComposerRecipes operation.
/// </summary>
public sealed record ListComposerRecipesRequest
{
    /// <summary>
    /// Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside that range returns <c>400 validation_failed</c>.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Continuation token from the <c>pageToken</c> of the previous response. Omit it on the first request; a response without <c>pageToken</c> is the last page.
    /// <para>
    /// The token records the position, the sort and the <c>allocation</c> filter IDs. Changing <c>sortBy</c>, <c>sortOrder</c> or the allocation IDs while paginating returns <c>400 pagination_token_invalid</c>. Keep the other <c>filter</c> keys and <c>maxResults</c> unchanged while paginating. Tokens expire 5 minutes after they are issued; an expired token returns <c>400 pagination_token_expired</c>. In both cases, restart from the first page.
    /// </para>
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Field to sort recipes by. Defaults to <c>severity</c>. Ties break by title (case-insensitive, ascending), then by <c>id</c> (ascending), whatever the <c>sortOrder</c>.
    /// </summary>
    public SortByDoiTComposerInsightsBetaApi SortBy { get; init; } = SortByDoiTComposerInsightsBetaApi.Severity;

    /// <summary>
    /// Sort direction for <c>sortBy</c>. Defaults to <c>desc</c>.
    /// </summary>
    public SortOrder SortOrder { get; init; } = SortOrder.Desc;

    /// <summary>
    /// Restricts the recipes returned. One string of <c>key:value</c> clauses: <c>,</c> separates alternative values for one key (OR) and <c>|</c> separates keys (AND). For example, <c>severity:critical,high|provider:aws,gcp</c> returns recipes whose severity is critical or high and whose provider is Amazon Web Services or Google Cloud Platform. Because <c>,</c> and <c>|</c> are separators, a value itself can't contain them. Only equality matching is supported. Omit <c>filter</c> to list every recipe that has results in your recently scanned accounts, including dismissed recipes.
    /// <para>
    /// Keys:
    /// - <c>provider</c>: one or more of <c>aws</c>, <c>azure</c>, <c>azure_ad</c>, <c>gcp</c>, <c>general</c>, <c>google_cloud_source</c>, <c>google_workspace</c>, <c>k8s</c>, <c>oci</c>, <c>vmware</c>.
    /// - <c>severity</c>: one or more of <c>critical</c>, <c>high</c>, <c>medium</c>, <c>low</c>.
    /// - <c>pillar</c>: one or more of <c>cost</c>, <c>operations</c>, <c>performance</c>, <c>security</c>, <c>compliance</c>. Matches recipes tagged with that pillar; <c>compliance</c> matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA).
    /// - <c>has_active_results</c>: exactly one of <c>true</c> or <c>false</c>.
    /// - <c>allocation</c>: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from <c>GET /analytics/v1/allocations</c>. Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics; counts, savings and <c>rowCount</c> then cover only those resources. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns <c>503</c> with <c>Retry-After</c> and never falls back to unfiltered data.
    /// </para>
    /// <para>
    /// Errors:
    /// - An unknown key returns <c>400 filter_key_not_supported</c> when it's the only problem, otherwise <c>400 validation_failed</c>.
    /// - A value outside the allowed list, a non-boolean <c>has_active_results</c>, more than one <c>has_active_results</c> value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing <c>/</c>, whitespace or control characters), a malformed expression or an unsupported operator returns <c>400 validation_failed</c>.
    /// - An allocation that doesn't exist or that you can't view returns <c>404 composer-api.allocation_not_found</c>.
    /// </para>
    /// </summary>
    public string? Filter { get; init; }
}
