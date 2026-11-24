namespace Paid.Requests.ValueModels;

/// <summary>
/// The inputs of the GetValueModelVersion operation.
/// </summary>
public sealed record GetValueModelVersionRequest
{
    public required int Version { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
