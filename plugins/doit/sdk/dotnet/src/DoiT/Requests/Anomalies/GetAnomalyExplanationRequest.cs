namespace DoiT.Requests.Anomalies;

/// <summary>
/// The inputs of the GetAnomalyExplanation operation.
/// </summary>
public sealed record GetAnomalyExplanationRequest
{
    /// <summary>
    /// A unique identifier of the anomaly.
    /// </summary>
    public required string Id { get; init; }
}
