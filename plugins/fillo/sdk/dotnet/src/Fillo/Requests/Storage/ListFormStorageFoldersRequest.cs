namespace Fillo.Requests.Storage;

/// <summary>
/// The inputs of the ListFormStorageFolders operation.
/// </summary>
public sealed record ListFormStorageFoldersRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// Filter the folder list by name.
    /// </summary>
    public string? Q { get; init; }
}
