namespace Fillo.Requests.Storage;

/// <summary>
/// The inputs of the ResetFormStorageFolder operation.
/// </summary>
public sealed record ResetFormStorageFolderRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
