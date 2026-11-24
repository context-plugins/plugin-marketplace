using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Component properties. For the "prop" category contains the matched property key-value pairs.
/// </summary>
public record Props
{
    /// <summary>
    /// Cloud service type (e.g. AWS::EC2::Instance).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_type")]
    public string? ServiceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
