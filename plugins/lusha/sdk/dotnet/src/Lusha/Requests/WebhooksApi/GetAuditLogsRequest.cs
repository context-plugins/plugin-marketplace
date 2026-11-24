using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetAuditLogs operation.
/// </summary>
public sealed record GetAuditLogsRequest
{
    /// <summary>
    /// Filter by subscription ID
    /// </summary>
    public string? SubscriptionId { get; init; }

    /// <summary>
    /// Filter by delivery status
    /// </summary>
    public StatusLushaWebhooksApi? Status { get; init; }

    /// <summary>
    /// Maximum number of results (1-100)
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Number of results to skip
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
