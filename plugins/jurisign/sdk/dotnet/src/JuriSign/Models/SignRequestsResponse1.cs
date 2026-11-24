using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record SignRequestsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public SignRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
