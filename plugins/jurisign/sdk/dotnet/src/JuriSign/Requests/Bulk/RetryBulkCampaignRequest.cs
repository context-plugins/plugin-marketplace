using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the RetryBulkCampaign operation.
/// </summary>
public sealed record RetryBulkCampaignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
