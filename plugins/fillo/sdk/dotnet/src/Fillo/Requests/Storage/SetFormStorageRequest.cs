using Fillo.Models;

namespace Fillo.Requests.Storage;

/// <summary>
/// The inputs of the SetFormStorage operation.
/// </summary>
public sealed record SetFormStorageRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsStorageRequest Body { get; init; }
}
