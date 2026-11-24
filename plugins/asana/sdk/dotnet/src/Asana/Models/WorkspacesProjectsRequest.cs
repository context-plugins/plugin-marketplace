using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record WorkspacesProjectsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ProjectRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
