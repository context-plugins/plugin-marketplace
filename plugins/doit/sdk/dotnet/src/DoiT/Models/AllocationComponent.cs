using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A filter component used inside allocation rules.
/// When the type is "allocation_rule", the component references existing allocation rules (nested allocation rules).
/// A maximum nesting depth of 3 levels is supported, and circular references are not allowed.
/// </summary>
public record AllocationComponent
{
    /// <summary>
    /// Key of an existing dimension. Examples: "billing_account_id", "country". When type is "allocation_rule", the key must be set to "allocation_rule".
    /// Use <c>GET /analytics/v1/dimensions</c> to retrieve all available dimensions.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Dimension filter type for allocation rule components. See <c>DimensionsTypes</c> for per-value meanings. Allocation components do not support <c>allocation</c>, <c>attribution</c>, or <c>attribution_group</c> types.
    /// </summary>
    [JsonPropertyName("type")]
    public required AllocationDimensionsTypes Type { get; init; }

    /// <summary>
    /// Values to filter on. When type is "allocation_rule", the values are IDs of existing allocation rules.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// If true, all selected values will be excluded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inverse")]
    public bool? Inverse { get; init; } = false;

    /// <summary>
    /// Include null values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeNull")]
    public bool? IncludeNull { get; init; } = false;

    /// <summary>
    /// If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and contains modes; rejected otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseInsensitive")]
    public bool? CaseInsensitive { get; init; } = false;

    /// <summary>
    /// Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are supported.
    /// </summary>
    [JsonPropertyName("mode")]
    public required ModeDoiTAllocationsApi Mode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
