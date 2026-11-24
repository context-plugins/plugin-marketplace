using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;

namespace Paid.Models;

public record ValueModelContentOverridesItemsSignalOverrides
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaults")]
    public IReadOnlyDictionary<string, ValueModelContentOverridesItemsSignalOverridesDefaults>? Defaults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
