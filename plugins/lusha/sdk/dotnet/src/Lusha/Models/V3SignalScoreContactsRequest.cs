using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3SignalScoreContactsRequest
{
    [JsonPropertyName("contacts")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<V3SignalScoreContactItem> Contacts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
