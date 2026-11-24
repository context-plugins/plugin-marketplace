using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1EvidenceWildfireV1EvidenceWildfireGet operation.
/// </summary>
public sealed record V1EvidenceWildfireV1EvidenceWildfireGetRequest
{
    public required double Lat { get; init; }

    public required double Lon { get; init; }

    public DetectedAt? DetectedAt { get; init; }

    public string Detector { get; init; } = "the detector";

    public Place? Place { get; init; }

    public Confidence? Confidence { get; init; }
}
