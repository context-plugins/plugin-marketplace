using Hightouch.Models;

namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the TriggerEnrichment operation.
/// </summary>
public sealed record TriggerEnrichmentRequest
{
    /// <summary>
    /// The id of the model to enrich
    /// </summary>
    public required double ModelId { get; init; }

    public MatchBoosterTriggerInput? Body { get; init; }
}
