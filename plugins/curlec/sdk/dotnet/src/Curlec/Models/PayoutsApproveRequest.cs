using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record PayoutsApproveRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remarks")]
    public string? Remarks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
