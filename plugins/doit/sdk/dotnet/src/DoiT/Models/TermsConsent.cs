using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Terms of Service acceptance. Required for the console and web channels.
/// </summary>
public record TermsConsent
{
    /// <summary>
    /// Terms version shown to the requester; must be a version the API currently accepts, otherwise terms_version_outdated.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("accepted")]
    public required bool Accepted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
