using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Datum10
{
    /// <summary>
    /// Type always "account".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Account identification.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Account name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Currency
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("class")]
    public required ClassConnectionsApi Class { get; init; }

    /// <summary>
    /// Account number
    /// </summary>
    [JsonPropertyName("accountNo")]
    public required string AccountNo { get; init; }

    /// <summary>
    /// Account available funds, nullable.
    /// </summary>
    [JsonPropertyName("availableFunds")]
    public required string? AvailableFunds { get; init; }

    /// <summary>
    /// Account balance, nullable.
    /// </summary>
    [JsonPropertyName("balance")]
    public required string? Balance { get; init; }

    /// <summary>
    /// Account last updated date and time.
    /// </summary>
    [JsonPropertyName("lastUpdated")]
    public required string LastUpdated { get; init; }

    /// <summary>
    /// Account status.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    [JsonPropertyName("links")]
    public required LinksConnectionsApi Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
