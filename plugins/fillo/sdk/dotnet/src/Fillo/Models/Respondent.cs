using System;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Respondent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("externalId")]
    public required string ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traits")]
    public object? Traits { get; init; }

    [JsonPropertyName("verified")]
    public required bool Verified { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("lastSeenAt")]
    public required DateTimeOffset LastSeenAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
