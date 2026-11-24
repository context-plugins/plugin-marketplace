using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the LaunchBulkCampaign operation.
/// </summary>
public sealed record LaunchBulkCampaignRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
