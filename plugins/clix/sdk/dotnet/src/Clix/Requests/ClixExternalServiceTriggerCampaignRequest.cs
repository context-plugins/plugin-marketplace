using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceTriggerCampaign operation.
/// </summary>
public sealed record ClixExternalServiceTriggerCampaignRequest
{
    /// <summary>
    /// The unique identifier of the campaign to trigger
    /// </summary>
    public required string CampaignId { get; init; }

    /// <summary>
    /// Campaign trigger configuration
    /// </summary>
    public V1TriggerCampaignRequest? Body { get; init; }
}
