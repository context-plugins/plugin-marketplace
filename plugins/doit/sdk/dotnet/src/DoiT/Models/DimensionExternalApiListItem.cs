using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Summary information about a dimension.
/// </summary>
public record DimensionExternalApiListItem
{
    /// <summary>
    /// The identifier of the dimension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The label of the dimension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// Dimension filter type. Always pair <c>type</c> with <c>id</c> on scope filters. Discover valid <c>id</c> + <c>type</c> pairs for your account with <c>GET /analytics/v1/dimensions</c>. <c>allocation_rule</c> replaces <c>attribution</c>; <c>allocation</c> replaces <c>attribution_group</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public DimensionsTypes? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
