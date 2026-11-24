using ApiVerve.Models;

namespace ApiVerve.Requests.AiComputerVision;

/// <summary>
/// The inputs of the Languagedetector operation.
/// </summary>
public sealed record LanguagedetectorRequest
{
    public required V1LanguagedetectorRequest Body { get; init; }
}
