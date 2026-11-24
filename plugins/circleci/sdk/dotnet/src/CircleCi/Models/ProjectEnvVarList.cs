using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record ProjectEnvVarList
{
    /// <summary>
    /// List of environment variables
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<ProjectEnvVar>? Items { get; init; }

    /// <summary>
    /// Token for retrieving the next page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_page_token")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
