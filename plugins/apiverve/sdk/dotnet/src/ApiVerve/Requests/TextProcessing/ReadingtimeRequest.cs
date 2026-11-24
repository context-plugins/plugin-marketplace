using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Readingtime operation.
/// </summary>
public sealed record ReadingtimeRequest
{
    public required V1ReadingtimeRequest Body { get; init; }
}
