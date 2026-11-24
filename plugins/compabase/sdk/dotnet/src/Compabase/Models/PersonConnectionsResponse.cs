using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record PersonConnectionsResponse
{
    [JsonPropertyName("person_id")]
    public required Guid PersonId { get; init; }

    [JsonPropertyName("companies")]
    public required IReadOnlyList<Company> Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
