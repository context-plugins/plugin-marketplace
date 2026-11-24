using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record CustomFieldsEnumOptionsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public EnumOption? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
