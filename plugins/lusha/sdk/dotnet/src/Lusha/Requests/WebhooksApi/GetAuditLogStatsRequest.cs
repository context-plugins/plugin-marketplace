namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetAuditLogStats operation.
/// </summary>
public sealed record GetAuditLogStatsRequest
{
    /// <summary>
    /// Filter statistics by subscription ID
    /// </summary>
    public string? SubscriptionId { get; init; }
}
