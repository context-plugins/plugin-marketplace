using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactResponse
{
    [JsonPropertyName("error")]
    public required ContactError Error { get; init; }

    [JsonPropertyName("isCreditCharged")]
    public required bool IsCreditCharged { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Contact? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
