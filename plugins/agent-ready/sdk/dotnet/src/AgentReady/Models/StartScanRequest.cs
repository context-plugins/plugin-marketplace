using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;

namespace AgentReady.Models;

/// <summary>
/// Body for POST /api/v1/scans.
/// </summary>
public record StartScanRequest
{
    [JsonPropertyName("url")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageLimit")]
    [Minimum(1)]
    [Maximum(2000)]
    public int? PageLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
