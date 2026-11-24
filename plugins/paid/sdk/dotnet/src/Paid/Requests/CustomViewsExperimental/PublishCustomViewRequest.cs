namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the PublishCustomView operation.
/// </summary>
public sealed record PublishCustomViewRequest
{
    public required string DisplayId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
