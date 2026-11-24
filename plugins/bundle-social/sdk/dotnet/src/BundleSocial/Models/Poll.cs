using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Poll
{
    [JsonPropertyName("options")]
    [MinLength(2)]
    [MaxLength(4)]
    public required IReadOnlyList<string> Options { get; init; }

    [JsonPropertyName("durationMinutes")]
    [Minimum(5)]
    [Maximum(10080)]
    public required int DurationMinutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
