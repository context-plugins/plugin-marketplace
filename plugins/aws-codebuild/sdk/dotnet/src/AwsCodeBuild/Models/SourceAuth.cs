using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record SourceAuth
{
    /// <summary>
    /// The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type4 Type { get; init; }

    /// <summary>
    /// The resource value that applies to the specified authorization type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
