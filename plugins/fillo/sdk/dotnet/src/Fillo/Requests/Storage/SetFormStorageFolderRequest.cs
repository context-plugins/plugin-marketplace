using Fillo.Models;

namespace Fillo.Requests.Storage;

/// <summary>
/// The inputs of the SetFormStorageFolder operation.
/// </summary>
public sealed record SetFormStorageFolderRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsStorageFolderRequest Body { get; init; }
}
