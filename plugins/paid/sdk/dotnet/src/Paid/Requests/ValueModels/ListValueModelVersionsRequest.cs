namespace Paid.Requests.ValueModels;

/// <summary>
/// The inputs of the ListValueModelVersions operation.
/// </summary>
public sealed record ListValueModelVersionsRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
