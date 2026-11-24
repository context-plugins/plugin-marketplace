using System.ComponentModel.DataAnnotations;
using DoiT.Models.Enums;

namespace DoiT.Requests.PerfectScaleForCommitmentsGcp;

/// <summary>
/// The inputs of the GetGcpRecommendation operation.
/// </summary>
public sealed record GetGcpRecommendationRequest
{
    /// <summary>
    /// GCP Billing Account ID (format <c>XXXXXX-XXXXXX-XXXXXX</c>; the account that owns the CUDs) that scopes the request.
    /// </summary>
    [RegularExpression("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")]
    public required string BillingAccountId { get; init; }

    /// <summary>
    /// PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is lowercased before validation.
    /// </summary>
    public required GcpService GcpService { get; init; }

    /// <summary>
    /// Filter by region scope, in <c>lower_snake_case</c> wire form (for example <c>us_east1</c>), or the
    /// literal <c>global</c>. Requires <c>gcp_service</c>; a request with <c>region</c> but no <c>gcp_service</c>
    /// returns <c>400</c> with code <c>gcp_service_required</c>. When both are omitted, all available
    /// regions for all available product lines are returned.
    /// <para>
    /// The value is format-validated, not checked against a closed region list: <c>compute</c> accepts
    /// only <c>global</c>, <c>cloud_sql</c> accepts only concrete regions (never <c>global</c>), and a value that
    /// is malformed or incompatible with <c>gcp_service</c> returns <c>400</c> with code <c>validation_failed</c>.
    /// A well-formed, service-compatible region with no data returns <c>200</c> with an empty result.
    /// Matching is case-insensitive; the value is lowercased before validation.
    /// </para>
    /// </summary>
    [RegularExpression("^(global|[a-z]+(_[a-z0-9]+)+)$")]
    public string? Region { get; init; }

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
