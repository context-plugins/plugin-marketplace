using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record CustomFieldsEnumOptionsInsertRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public EnumOptionInsertRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
