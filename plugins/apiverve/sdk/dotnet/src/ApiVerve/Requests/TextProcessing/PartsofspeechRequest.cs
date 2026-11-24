using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Partsofspeech operation.
/// </summary>
public sealed record PartsofspeechRequest
{
    public required V1PartsofspeechRequest Body { get; init; }
}
