using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Kyc1
{
    /// <summary>
    /// Individual PAN. 4th character must be P.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pan")]
    public string? Pan { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
