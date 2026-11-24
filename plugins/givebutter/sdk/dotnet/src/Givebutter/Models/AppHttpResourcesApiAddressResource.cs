using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record AppHttpResourcesApiAddressResource
{
    [JsonPropertyName("address_1")]
    public required string Address1 { get; init; }

    [JsonPropertyName("address_2")]
    public required string? Address2 { get; init; }

    [JsonPropertyName("city")]
    public required string City { get; init; }

    [JsonPropertyName("state")]
    public required string? State { get; init; }

    [JsonPropertyName("zipcode")]
    public required string? Zipcode { get; init; }

    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("is_primary")]
    public required bool IsPrimary { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
