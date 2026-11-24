using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data2FlightdeckDopeSecurityPublicApiSpecification
{
    /// <summary>
    /// Exception updates keyed first by category name, then by user or group identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyDictionary<string, CategoryExceptionUpdate>? Categories { get; init; }

    /// <summary>
    /// Exception updates keyed first by custom category name, then by user or group identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customCategories")]
    public IReadOnlyDictionary<string, CategoryExceptionUpdate>? CustomCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
