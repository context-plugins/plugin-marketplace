using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Leetspeak operation.
/// </summary>
public sealed record LeetspeakRequest
{
    public required V1LeetspeakRequest Body { get; init; }
}
