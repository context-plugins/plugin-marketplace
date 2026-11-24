using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record EnumOptionsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public EnumOptionRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
