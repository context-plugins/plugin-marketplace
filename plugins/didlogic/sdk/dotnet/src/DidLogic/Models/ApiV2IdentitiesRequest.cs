using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2IdentitiesRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public Identity1? Identity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
