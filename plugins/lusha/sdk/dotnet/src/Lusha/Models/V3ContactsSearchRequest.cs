using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3ContactsSearchRequest
{
    [JsonPropertyName("contacts")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<V3ContactSearchItem> Contacts { get; init; }

    /// <summary>
    /// Additional options for search requests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public V3SearchOptions? Options { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public V3ContactSignalsDto? Signals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
