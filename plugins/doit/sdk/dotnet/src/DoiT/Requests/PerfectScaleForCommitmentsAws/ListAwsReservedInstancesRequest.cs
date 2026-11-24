using System.ComponentModel.DataAnnotations;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.PerfectScaleForCommitmentsAws;

/// <summary>
/// The inputs of the ListAwsReservedInstances operation.
/// </summary>
public sealed record ListAwsReservedInstancesRequest
{
    /// <summary>
    /// 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request.
    /// </summary>
    [RegularExpression("^\\d{12}$")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Filter by Reserved Instance lifecycle state. Omit to include all states.
    /// </summary>
    public Status3? Status { get; init; }

    /// <summary>
    /// Filter by exact EC2 instance type (for example, <c>m5.large</c>). Case-sensitive. Must match the <c>instanceType</c> value on the RI exactly.
    /// </summary>
    public string? InstanceType { get; init; }

    /// <summary>
    /// Filter by EC2 instance family, the leading segment of <c>instanceType</c> before the dot (for example, <c>m5</c> matches <c>m5.large</c> and <c>m5.xlarge</c>). Case-sensitive.
    /// </summary>
    public string? InstanceFamily { get; init; }

    /// <summary>
    /// Filter by AWS region (for example, <c>us-east-1</c>). Case-sensitive. Must match the region stored on the RI.
    /// </summary>
    public string? Region { get; init; }

    /// <summary>
    /// Filter by RI offering class. Omit to include both standard and convertible.
    /// </summary>
    public OfferingClass1? OfferingClass { get; init; }

    /// <summary>
    /// Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns <c>400</c> with code <c>pagination_token_invalid</c>; an expired cursor returns <c>400</c> with code <c>pagination_token_expired</c> — restart pagination from the beginning.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;

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
