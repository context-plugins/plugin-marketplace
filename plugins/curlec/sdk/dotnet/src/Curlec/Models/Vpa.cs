using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Required if type=vpa.
/// </summary>
public record Vpa
{
    /// <summary>
    /// Full UPI VPA address (e.g., user@upi).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
