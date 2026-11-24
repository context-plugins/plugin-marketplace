using S1.Models.AnyOf;

namespace S1.Requests.Search;

/// <summary>
/// The inputs of the News operation.
/// </summary>
public sealed record NewsOperationRequest
{
    public required NewsRequest Body { get; init; }
}
