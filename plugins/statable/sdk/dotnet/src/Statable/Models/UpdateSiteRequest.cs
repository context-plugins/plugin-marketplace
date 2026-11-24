using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation.Attributes;

namespace Statable.Models;

/// <summary>
/// Omitted fields are left unchanged.
/// </summary>
public record UpdateSiteRequest
{
    /// <summary>
    /// Must start with http:// or https://.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// 0 = Sunday … 6 = Saturday.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("week_start")]
    [Minimum(0)]
    [Maximum(6)]
    public int? WeekStart { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
