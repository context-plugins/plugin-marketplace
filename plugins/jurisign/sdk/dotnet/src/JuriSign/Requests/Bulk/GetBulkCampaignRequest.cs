using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the GetBulkCampaign operation.
/// </summary>
public sealed record GetBulkCampaignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
