using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record Itinerary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departure_city")]
    public string? DepartureCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departure_country")]
    public string? DepartureCountry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrival_city")]
    public string? ArrivalCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrival_country")]
    public string? ArrivalCountry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("carrier")]
    public string? Carrier { get; init; }

    /// <summary>
    /// RFC3339 e.g. 2018-10-17T07:26:33Z
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departure_date")]
    public DateTimeOffset? DepartureDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("class")]
    public string? Class { get; init; }

    /// <summary>
    /// true - if ticket can be cancelled/refunded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refundable")]
    public bool? Refundable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
