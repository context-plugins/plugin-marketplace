using Sapling.Models;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingAutocomplete operation.
/// </summary>
public sealed record SaplingAutocompleteRequest
{
    public required ApiV1CompleteRequest Body { get; init; }
}
