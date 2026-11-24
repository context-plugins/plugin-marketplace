using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ProjectBadge
{
    /// <summary>
    /// Set this to true to generate a publicly accessible URL for your project's build badge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("badgeEnabled")]
    public bool? BadgeEnabled { get; init; }

    /// <summary>
    /// The publicly-accessible URL through which you can access the build badge for your project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("badgeRequestUrl")]
    public string? BadgeRequestUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
