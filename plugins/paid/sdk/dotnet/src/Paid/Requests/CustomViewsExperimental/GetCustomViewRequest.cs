namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the GetCustomView operation.
/// </summary>
public sealed record GetCustomViewRequest
{
    public required string DisplayId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
