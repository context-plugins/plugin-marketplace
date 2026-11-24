using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Math operation.
/// </summary>
public sealed record MathRequest
{
    public required V1MathRequest Body { get; init; }
}
