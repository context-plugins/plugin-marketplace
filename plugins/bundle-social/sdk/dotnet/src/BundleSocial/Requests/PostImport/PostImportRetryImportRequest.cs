using BundleSocial.Models;

namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportRetryImport operation.
/// </summary>
public sealed record PostImportRetryImportRequest
{
    public required string ImportId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostHistoryImportRetryRequest? Body { get; init; }
}
