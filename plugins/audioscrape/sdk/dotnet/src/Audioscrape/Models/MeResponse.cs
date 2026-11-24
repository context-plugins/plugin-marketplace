using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record MeResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key")]
    public MeApiKey1? ApiKey { get; init; }

    /// <summary>
    /// Effective dated API version this request was evaluated against, per the
    /// <c>Audioscrape-Version</c> header / <c>api_keys.pinned_version</c> resolution.
    /// </summary>
    [JsonPropertyName("api_version")]
    public required string ApiVersion { get; init; }

    [JsonPropertyName("plan")]
    public required MePlan Plan { get; init; }

    [JsonPropertyName("user")]
    public required MeUser User { get; init; }

    /// <summary>
    /// Workspace this request is scoped to (resolved from the API key or the
    /// session's active workspace). List all your workspaces at <c>/api/workspaces</c>.
    /// </summary>
    [JsonPropertyName("workspace")]
    public required MeWorkspace1 Workspace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
