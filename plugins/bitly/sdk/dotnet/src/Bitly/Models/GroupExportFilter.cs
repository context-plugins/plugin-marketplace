using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

/// <summary>
/// Search constraints used to resolve links or QR codes for export. Required for links_list and qr_codes_list.
/// </summary>
public record GroupExportFilter
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Filter by archive state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public ArchivedBitlyGroupsApi? Archived { get; init; }

    /// <summary>
    /// Free-text search query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    /// <summary>
    /// Include items created at or after this Unix timestamp (UTC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_after")]
    public int? CreatedAfter { get; init; }

    /// <summary>
    /// Include items created before this Unix timestamp (UTC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_before")]
    public int? CreatedBefore { get; init; }

    /// <summary>
    /// Filter links by campaign GUID. Ignored for qr_codes_list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign_guid")]
    public string? CampaignGuid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
