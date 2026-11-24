namespace AmazonDevOpsGuru.Requests.Insights;

/// <summary>
/// The inputs of the DescribeInsight operation.
/// </summary>
public sealed record DescribeInsightRequest
{
    /// <summary>
    /// The ID of the insight.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The ID of the member account in the organization.
    /// </summary>
    public string? AccountId { get; init; }
}
