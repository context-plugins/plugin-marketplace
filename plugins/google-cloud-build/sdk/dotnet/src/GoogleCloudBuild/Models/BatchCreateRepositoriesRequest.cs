using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Message for creating repositoritories in batch.
/// </summary>
public record BatchCreateRepositoriesRequest
{
    /// <summary>
    /// Required. The request messages specifying the repositories to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public IReadOnlyList<CreateRepositoryRequest>? Requests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
