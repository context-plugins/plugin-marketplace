using S1.Models.AnyOf;

namespace S1.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchOperationRequest
{
    public required SearchRequest Body { get; init; }
}
