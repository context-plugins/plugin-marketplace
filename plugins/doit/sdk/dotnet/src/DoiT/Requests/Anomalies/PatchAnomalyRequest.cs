using DoiT.Models;

namespace DoiT.Requests.Anomalies;

/// <summary>
/// The inputs of the PatchAnomaly operation.
/// </summary>
public sealed record PatchAnomalyRequest
{
    /// <summary>
    /// A unique identifier of the anomaly.
    /// </summary>
    public required string Id { get; init; }

    public required AnomalyStatusUpdate Body { get; init; }
}
