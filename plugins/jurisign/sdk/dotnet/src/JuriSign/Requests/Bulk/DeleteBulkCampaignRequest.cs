using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the DeleteBulkCampaign operation.
/// </summary>
public sealed record DeleteBulkCampaignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
