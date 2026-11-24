using ApiVerve.Models;

namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Morsecode operation.
/// </summary>
public sealed record MorsecodeRequest
{
    public required V1MorsecodeRequest Body { get; init; }
}
