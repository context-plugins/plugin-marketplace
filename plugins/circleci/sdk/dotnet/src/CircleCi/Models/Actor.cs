using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

public record Actor
{
    /// <summary>
    /// The login of the actor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("login")]
    public string? Login { get; init; }

    /// <summary>
    /// The avatar URL of the actor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatar_url")]
    [Format(FormatKind.Uri)]
    public string? AvatarUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
