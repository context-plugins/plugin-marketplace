using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the CancelBulkCampaign operation.
/// </summary>
public sealed record CancelBulkCampaignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
