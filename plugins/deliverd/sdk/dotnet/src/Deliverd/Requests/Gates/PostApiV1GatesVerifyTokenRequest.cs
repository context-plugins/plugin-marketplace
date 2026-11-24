using Deliverd.Models;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the PostApiV1GatesVerifyToken operation.
/// </summary>
public sealed record PostApiV1GatesVerifyTokenRequest
{
    public ApiV1GatesVerifyTokenRequest? Body { get; init; }
}
