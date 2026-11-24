using BundleSocial.Models;

namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportCreate operation.
/// </summary>
public sealed record PostImportCreateRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostHistoryImportRequest? Body { get; init; }
}
