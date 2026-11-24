using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record ByokCredentialItem
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("provider_id")]
    public required int ProviderId { get; init; }

    [JsonPropertyName("provider_name")]
    public required string ProviderName { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("masked_value")]
    public required string MaskedValue { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
