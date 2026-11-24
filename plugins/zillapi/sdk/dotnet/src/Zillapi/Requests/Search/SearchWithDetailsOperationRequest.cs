using Zillapi.Models;

namespace Zillapi.Requests.Search;

/// <summary>
/// The inputs of the SearchWithDetails operation.
/// </summary>
public sealed record SearchWithDetailsOperationRequest
{
    public required SearchWithDetailsRequest Body { get; init; }
}
