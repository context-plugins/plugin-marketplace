using System;
using System.Text.Json.Serialization;

namespace Basiq.Models;

public record UserConsentGetResponse
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("created")]
    public required DateTimeOffset Created { get; init; }

    [JsonPropertyName("updated")]
    public required DateTimeOffset Updated { get; init; }

    [JsonPropertyName("expiryDate")]
    public required DateTimeOffset ExpiryDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin")]
    public string? Origin { get; init; }

    /// <summary>
    /// active, revoked, and expired
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("purpose")]
    public required Purpose Purpose { get; init; }

    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    /// <summary>
    /// To indicate when a user consent was revoked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revoked")]
    public string? Revoked { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public LinksConnectConsentsApi? Links { get; init; }
}
