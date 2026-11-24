namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the ListPlans operation.
/// </summary>
public sealed record ListPlansRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    public string? ProductId { get; init; }

    public string? ExternalProductId { get; init; }

    /// <summary>
    /// Whether to include archived plans in the response. Defaults to true.
    /// </summary>
    public bool IncludeArchived { get; init; } = true;

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
