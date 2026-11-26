using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;

namespace Justtrack.Models;

public record PartnerOutput
{
    [JsonPropertyName("id")]
    [Minimum(1)]
    public required int Id { get; init; }

    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
