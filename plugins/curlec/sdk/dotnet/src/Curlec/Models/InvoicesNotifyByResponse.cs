using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record InvoicesNotifyByResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public bool? Success { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
