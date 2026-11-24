using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data1FlightdeckDopeSecurityPublicApiSpecification
{
    /// <summary>
    /// Wrapper for category data with inheritance flag
    /// </summary>
    [JsonPropertyName("categories")]
    public required CategoryBlock Categories { get; init; }

    /// <summary>
    /// Wrapper for custom category data with inheritance flag
    /// </summary>
    [JsonPropertyName("customCategories")]
    public required CustomCategoryBlock CustomCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
