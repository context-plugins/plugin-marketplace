using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record CustomFieldsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public CustomFieldRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
