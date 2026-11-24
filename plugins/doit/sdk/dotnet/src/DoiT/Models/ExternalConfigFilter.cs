using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// To include or exclude certain values.
/// When using allocation rules as a filter, both the type and the ID must be "allocation_rule", and the values array contains the allocation rule IDs.
/// When using allocations as a filter, the type must be "allocation" and the ID is the actual allocation group ID.
/// </summary>
public record ExternalConfigFilter
{
    /// <summary>
    /// Dimension key to filter on. Must pair with <c>type</c> and match a dimension returned by <c>GET /analytics/v1/dimensions</c> (for example, <c>service_description</c> with <c>type: fixed</c>). For <c>allocation_rule</c>, use <c>allocation_rule</c>. For <c>allocation</c>, use the allocation group ID. See <c>DimensionsTypes</c> for how each <c>type</c> uses <c>id</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Dimension filter type. Always pair <c>type</c> with <c>id</c> on scope filters. Discover valid <c>id</c> + <c>type</c> pairs for your account with <c>GET /analytics/v1/dimensions</c>. <c>allocation_rule</c> replaces <c>attribution</c>; <c>allocation</c> replaces <c>attribution_group</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public required DimensionsTypes Type { get; init; }

    /// <summary>
    /// List of values to include or exclude. Must match exact strings from your billing or DataHub data for the dimension (for example, <c>Amazon Simple Storage Service</c> for AWS S3 on <c>service_description</c>). For <c>allocation_rule</c>, use allocation rule IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    /// <summary>
    /// Controls how the dimension’s <c>values</c> are matched when the alert query runs. If mode is omitted, behavior defaults to is.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// Set to <c>true</c> to exclude the set values. If inverse is omitted, behavior defaults to <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inverse")]
    public bool? Inverse { get; init; }

    /// <summary>
    /// If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and contains modes; ignored otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseInsensitive")]
    public bool? CaseInsensitive { get; init; } = false;

    /// <summary>
    /// Include rows where the dimension is null. If includeNull is omitted, behavior defaults to <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeNull")]
    public bool? IncludeNull { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
