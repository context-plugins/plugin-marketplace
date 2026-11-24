using Sapling.Models.AnyOf;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingDetectLanguage operation.
/// </summary>
public sealed record SaplingDetectLanguageRequest
{
    public required ApiV1LangdetectRequest2 Body { get; init; }
}
