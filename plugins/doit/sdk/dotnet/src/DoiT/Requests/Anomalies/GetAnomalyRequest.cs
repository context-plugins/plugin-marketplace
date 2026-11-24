namespace DoiT.Requests.Anomalies;

/// <summary>
/// The inputs of the GetAnomaly operation.
/// </summary>
public sealed record GetAnomalyRequest
{
    /// <summary>
    /// A unique identifier of the anomaly.
    /// </summary>
    public required string Id { get; init; }
}
