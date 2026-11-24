using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record ActiveConfiguration
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlements")]
    public Settlements? Settlements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
