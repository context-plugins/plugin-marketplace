using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record AnalyticBundleSocialTeamApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("count")]
    public required double Count { get; init; }

    [JsonPropertyName("bioItemId")]
    public required string BioItemId { get; init; }

    [JsonPropertyName("deviceType")]
    public required IReadOnlyDictionary<string, double> DeviceType { get; init; }

    [JsonPropertyName("country")]
    public required IReadOnlyDictionary<string, double> Country { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
