using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AllocationValueExtractionSource
{
    /// <summary>
    /// The dimension type to read the value from. Label-map types (label, tag, project_label, system_label, gke_label) extract the value of the given key; "fixed" extracts a raw table dimension (for example project_id, service_description, region). Derived dimensions such as credits are not extractable.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDoiTAllocationsApi Type { get; init; }

    /// <summary>
    /// The label/tag key, or the fixed dimension ID, whose value is extracted.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Optional cloud providers this source applies to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providers")]
    public IReadOnlyList<string>? Providers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
