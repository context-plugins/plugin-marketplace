using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectsSaveAsTemplateResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public JobResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
