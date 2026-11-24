using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Textsummarizer operation.
/// </summary>
public sealed record TextsummarizerRequest
{
    public required V1TextsummarizerRequest Body { get; init; }
}
