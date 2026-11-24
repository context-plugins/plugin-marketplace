using System.Text.Json.Serialization;
using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Models;

/// <summary>
/// Delete status
/// </summary>
public record DocResponse
{
    /// <summary>
    /// Response Status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public DataArchbeePublicDocumentsApi? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
