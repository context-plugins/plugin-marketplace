using System.Collections.Generic;
using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

public record Data
{
    /// <summary>
    /// Unit listings. The first item is sometimes the building's parent record (no unitNumber); units follow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("units")]
    public IReadOnlyList<BuildingUnit>? Units { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
