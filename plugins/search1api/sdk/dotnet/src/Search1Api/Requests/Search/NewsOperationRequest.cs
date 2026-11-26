using Search1Api.Models.AnyOf;

namespace Search1Api.Requests.Search;

/// <summary>
/// The inputs of the News operation.
/// </summary>
public sealed record NewsOperationRequest
{
    public required NewsRequest Body { get; init; }
}
