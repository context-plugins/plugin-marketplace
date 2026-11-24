using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Translator operation.
/// </summary>
public sealed record TranslatorRequest
{
    public required V1TranslatorRequest Body { get; init; }
}
