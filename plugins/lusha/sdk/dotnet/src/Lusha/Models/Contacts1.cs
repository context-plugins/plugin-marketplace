using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Contacts1
{
    /// <summary>
    /// Restricted contact-attribute filters usable within a company prospecting request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public V3ContactsOnCompanySearchFilters? Include { get; init; }

    /// <summary>
    /// Restricted contact-attribute filters usable within a company prospecting request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude")]
    public V3ContactsOnCompanySearchFilters? Exclude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
