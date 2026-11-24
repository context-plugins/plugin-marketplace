using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The dimension that defines a row in the report.
/// </summary>
public record Group
{
    /// <summary>
    /// Dimension ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// To limit the number of results based on ranking. See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom">Limit by rank</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public Limit? Limit { get; init; }

    /// <summary>
    /// Dimension filter type. Always pair <c>type</c> with <c>id</c> on scope filters. Discover valid <c>id</c> + <c>type</c> pairs for your account with <c>GET /analytics/v1/dimensions</c>. <c>allocation_rule</c> replaces <c>attribution</c>; <c>allocation</c> replaces <c>attribution_group</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public DimensionsTypes? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
