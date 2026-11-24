namespace FacebookBusinessManager.Requests.Pages;

/// <summary>
/// The inputs of the GetPage operation.
/// </summary>
public sealed record GetPageRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response
    /// </summary>
    public string? Fields { get; init; }
}
