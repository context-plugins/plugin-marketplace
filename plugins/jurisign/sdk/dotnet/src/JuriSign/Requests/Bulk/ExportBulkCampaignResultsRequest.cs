using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the ExportBulkCampaignResults operation.
/// </summary>
public sealed record ExportBulkCampaignResultsRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
