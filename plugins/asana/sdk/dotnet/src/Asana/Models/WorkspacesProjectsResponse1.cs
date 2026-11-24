using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record WorkspacesProjectsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ProjectResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
