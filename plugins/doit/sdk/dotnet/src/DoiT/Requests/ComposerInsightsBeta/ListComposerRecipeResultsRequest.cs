using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.ComposerInsightsBeta;

/// <summary>
/// The inputs of the ListComposerRecipeResults operation.
/// </summary>
public sealed record ListComposerRecipeResultsRequest
{
    /// <summary>
    /// ID of the Composer recipe whose results to list. Get recipe IDs from <c>GET /insights/v2/recipes</c>.
    /// </summary>
    [Minimum(1)]
    public required long RecipeId { get; init; }

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
    /// Field to sort results by. Defaults to <c>detection_time</c>. Ties break by <c>id</c> (ascending), whatever the <c>sortOrder</c>.
    /// </summary>
    public SortBy1 SortBy { get; init; } = SortBy1.DetectionTime;

    /// <summary>
    /// Sort direction for <c>sortBy</c>. Defaults to <c>desc</c>.
    /// </summary>
    public SortOrder SortOrder { get; init; } = SortOrder.Desc;

    /// <summary>
    /// Restricts the results returned. One string of <c>key:value</c> clauses: <c>,</c> separates alternative values for one key (OR) and <c>|</c> separates keys (AND). For example, <c>region:us-east-1,us-west-2|status:active</c> returns active results in either region. Because <c>,</c> and <c>|</c> are separators, a value itself can't contain them. Matching is exact unless a key says otherwise. Omit <c>filter</c> to list the recipe's results from the most recent scan of each recently scanned account, in every status.
    /// <para>
    /// Keys:
    /// - <c>account_id</c>: one or more cloud account IDs, matched exactly.
    /// - <c>region</c>: one or more cloud regions, matched exactly.
    /// - <c>issued_resource_name</c>: one or more names of the affected resource, matched exactly.
    /// - <c>related_resource_name</c>: one or more names of resources related to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in the result's related-resource details, not only against names.
    /// - <c>status</c>: exactly one of <c>active</c> (not resolved and not snoozed), <c>snoozed</c>, <c>resolved</c> or <c>all</c>. Omitting it is the same as <c>all</c>. Combine <c>resolved</c> with <c>last_scan_only:false</c>; with the default it usually returns nothing.
    /// - <c>last_scan_only</c>: exactly one of <c>true</c> or <c>false</c>. Defaults to <c>true</c>, which returns only results reported by each recently scanned account's most recent scan. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default. <c>false</c> returns results from every scan and account, including resolved ones.
    /// - <c>allocation</c>: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from <c>GET /analytics/v1/allocations</c>. Matches results on resources in any of those allocations, as resolved by Cloud Analytics; <c>rowCount</c> then counts only those results. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns <c>503</c> with <c>Retry-After</c> and never falls back to unfiltered data.
    /// </para>
    /// <para>
    /// Errors:
    /// - An unknown key returns <c>400 filter_key_not_supported</c> when it's the only problem, otherwise <c>400 validation_failed</c>.
    /// - A <c>status</c> outside the allowed list, a non-boolean <c>last_scan_only</c>, more than one <c>status</c> or <c>last_scan_only</c> value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing <c>/</c>, whitespace or control characters), a malformed expression or an unsupported operator returns <c>400 validation_failed</c>.
    /// - An allocation that doesn't exist or that you can't view returns <c>404 composer-api.allocation_not_found</c>.
    /// </para>
    /// </summary>
    public string? Filter { get; init; }
}
