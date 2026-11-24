using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Jwtdecoder operation.
/// </summary>
public sealed record JwtdecoderRequest
{
    public required V1JwtdecoderRequest Body { get; init; }
}
