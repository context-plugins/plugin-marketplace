using Deliverd.Models;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the PostApiV1Gates operation.
/// </summary>
public sealed record PostApiV1GatesRequest
{
    public ApiV1GatesRequest? Body { get; init; }
}
