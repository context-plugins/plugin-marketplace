using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SegmentSubscriptionInput2
{
    /// <summary>
    /// Discriminator value: custom_fields
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "custom_fields";

    /// <summary>
    /// The logical operator used to combine multiple custom field filters. Defaults to <c>and</c> if not specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public CustomFieldsLogicalOperator2? Operator { get; init; }

    [JsonPropertyName("custom_fields")]
    public required IReadOnlyList<CustomFieldFilter> CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
