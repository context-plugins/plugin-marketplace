using System.ComponentModel.DataAnnotations;
using DoiT.Models.Enums;

namespace DoiT.Requests.PerfectScaleForCommitmentsAws;

/// <summary>
/// The inputs of the GetAwsRecommendation operation.
/// </summary>
public sealed record GetAwsRecommendationRequest
{
    /// <summary>
    /// 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request.
    /// </summary>
    [RegularExpression("^\\d{12}$")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the AWS organization (<c>compute</c> or <c>database</c>).
    /// </summary>
    public required ServiceId ServiceId { get; init; }

    /// <summary>
    /// Time bucket size for eligible-spend data points on the recommendation response. If omitted, defaults to <c>day</c>. Coarser buckets return min/max/median usage; <c>hour</c> returns per-hour totals.
    /// </summary>
    public Granularity Granularity { get; init; } = Granularity.Day;

    /// <summary>
    /// Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the <c>Authorization</c> header (<c>Bearer &lt;token&gt;</c>). See <see href="https://developer.doit.com/docs/start">Get Started</see>.
    /// <para>
    /// <b>When to omit (most callers):</b> If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.
    /// </para>
    /// <para>
    /// <b>When to send:</b> If your credential can access more than one customer, set <c>X-Tenant-Id</c> to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns <c>403 Forbidden</c>. Prefer this header over the legacy <c>customerContext</c> query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.
    /// </para>
    /// </summary>
    public string? XTenantId { get; init; }
}
