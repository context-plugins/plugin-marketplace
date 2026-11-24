namespace Unbounce.Requests.Pages;

/// <summary>
/// The inputs of the GetPage operation.
/// </summary>
public sealed record GetPageRequest
{
    public required string PageId { get; init; }
}
