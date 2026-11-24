namespace Paid.Requests.ValueModels;

/// <summary>
/// The inputs of the GetCurrentValueModel operation.
/// </summary>
public sealed record GetCurrentValueModelRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
