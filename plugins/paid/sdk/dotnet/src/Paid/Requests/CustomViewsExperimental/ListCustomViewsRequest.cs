namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the ListCustomViews operation.
/// </summary>
public sealed record ListCustomViewsRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
