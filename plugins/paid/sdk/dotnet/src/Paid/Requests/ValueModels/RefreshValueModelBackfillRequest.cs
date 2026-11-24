namespace Paid.Requests.ValueModels;

/// <summary>
/// The inputs of the RefreshValueModelBackfill operation.
/// </summary>
public sealed record RefreshValueModelBackfillRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
