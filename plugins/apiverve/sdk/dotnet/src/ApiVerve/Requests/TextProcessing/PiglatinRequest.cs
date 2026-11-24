using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Piglatin operation.
/// </summary>
public sealed record PiglatinRequest
{
    public required V1PiglatinRequest Body { get; init; }
}
