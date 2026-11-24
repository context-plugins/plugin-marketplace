using BundleSocial.Core.Models;

namespace BundleSocial.Requests.PostCsv;

/// <summary>
/// The inputs of the PostCsvCreate operation.
/// </summary>
public sealed record PostCsvCreateRequest
{
    public BinaryContent? File { get; init; }
}
