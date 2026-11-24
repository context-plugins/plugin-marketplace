using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DebugSession
{
    /// <summary>
    /// Specifies if session debugging is enabled for this build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionEnabled")]
    public bool? SessionEnabled { get; init; }

    /// <summary>
    /// Contains the identifier of the Session Manager session used for the build. To work with the paused build, you open this session to examine, control, and resume the build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionTarget")]
    public string? SessionTarget { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
