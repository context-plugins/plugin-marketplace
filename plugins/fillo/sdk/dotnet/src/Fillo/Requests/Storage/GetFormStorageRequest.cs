namespace Fillo.Requests.Storage;

/// <summary>
/// The inputs of the GetFormStorage operation.
/// </summary>
public sealed record GetFormStorageRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
