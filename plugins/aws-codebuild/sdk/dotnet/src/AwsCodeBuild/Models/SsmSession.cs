using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record SsmSession
{
    /// <summary>
    /// The ID of the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// An encrypted token value containing session and caller information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokenValue")]
    public string? TokenValue { get; init; }

    /// <summary>
    /// A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the node.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamUrl")]
    public string? StreamUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
