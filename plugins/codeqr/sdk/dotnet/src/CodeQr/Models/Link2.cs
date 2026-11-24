using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation;
using CodeQr.Core.Validation.Attributes;

namespace CodeQr.Models;

public record Link2
{
    /// <summary>
    /// The unique ID of the short link.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The domain of the short link. If not provided, the main domain of the project will be used (or <c>codeqr.link</c> if the project has no domains).
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The slug of the short link. If not provided, a random 7-character slug will be generated.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// The complete URL of the short link, including the https protocol (for example, <c>https://codeqr.link/try</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortLink")]
    [Format(FormatKind.Uri)]
    public string? ShortLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
