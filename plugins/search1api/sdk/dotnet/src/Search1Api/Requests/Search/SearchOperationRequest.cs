using Search1Api.Models.AnyOf;

namespace Search1Api.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchOperationRequest
{
    public required SearchRequest Body { get; init; }
}
