using Zillapi.Models.AnyOf;

namespace Zillapi.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchOperationRequest
{
    public required SearchRequest2 Body { get; init; }
}
