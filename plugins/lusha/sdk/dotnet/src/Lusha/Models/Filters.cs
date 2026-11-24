using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// <c>filters.contacts</c> cannot be combined with company <c>searchText</c>, <c>signals</c>, <c>intent</c>, or <c>technologies</c> on the same request — doing so returns <c>400</c> (contact filters are never silently ignored).
/// </summary>
public record Filters
{
    [JsonPropertyName("companies")]
    public required Companies1 Companies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contacts")]
    public Contacts1? Contacts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
