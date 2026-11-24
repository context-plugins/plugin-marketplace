using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// A company referenced in a LinkedIn activity intent post.
/// </summary>
public record LinkedinActivityIntentCompanyMention
{
    /// <summary>
    /// Lusha company ID, or null if the company couldn't be resolved to a Lusha record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrl")]
    public string? LinkedinUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
