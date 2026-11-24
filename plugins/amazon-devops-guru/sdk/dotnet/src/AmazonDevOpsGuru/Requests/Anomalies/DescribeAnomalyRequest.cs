namespace AmazonDevOpsGuru.Requests.Anomalies;

/// <summary>
/// The inputs of the DescribeAnomaly operation.
/// </summary>
public sealed record DescribeAnomalyRequest
{
    /// <summary>
    /// The ID of the anomaly.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The ID of the member account.
    /// </summary>
    public string? AccountId { get; init; }
}
