using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Dimension metadata returned by the API.
/// </summary>
public record DimensionsExternalApiGetResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// Dimension filter type. Always pair <c>type</c> with <c>id</c> on scope filters. Discover valid <c>id</c> + <c>type</c> pairs for your account with <c>GET /analytics/v1/dimensions</c>. <c>allocation_rule</c> replaces <c>attribution</c>; <c>allocation</c> replaces <c>attribution_group</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public DimensionsTypes? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<ExternalApiGetValue>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
