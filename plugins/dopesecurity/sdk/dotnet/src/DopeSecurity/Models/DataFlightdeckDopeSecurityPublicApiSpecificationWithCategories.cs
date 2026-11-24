using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.AnyOf;

namespace DopeSecurity.Models;

public record DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories
{
    /// <summary>
    /// Restriction updates keyed by category name, or BaseInheritance to reset to base.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public Categories? Categories { get; init; }

    /// <summary>
    /// Restriction updates keyed by custom category name, or BaseInheritance to reset to base.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customCategories")]
    public CustomCategories? CustomCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
