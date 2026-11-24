using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Models.Enums;

namespace Applike.Models;

public record AppEvent1
{
    /// <summary>
    /// Specifies the unit represented by the value field. <b>Mutually exclusive with currency.</b>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public Unit? Unit { get; init; }

    /// <summary>
    /// ISO 4217 currency for the value field. <b>Mutually exclusive with unit.</b>
    /// </summary>
    [JsonPropertyName("currency")]
    [StringLength(3, MinimumLength = 3)]
    public required string Currency { get; init; }

    /// <summary>
    /// Globally unique id of the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// name of the event, e.g. level_success.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    [MinLength(1)]
    public string? Event { get; init; }

    /// <summary>
    /// additional information about the event. Can contain any key for dimensions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyDictionary<string, string>? Dimensions { get; init; }

    /// <summary>
    /// Specifies the numerical value for the set unit/currency, eg 1004 milliseconds, 1 count, or 5.99 USD.
    /// If both Unit and Currency are not set, value is always set to 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code of where the event happened
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    [StringLength(2, MinimumLength = 2)]
    public string? CountryCode { get; init; }

    /// <summary>
    /// when did the event happen?
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("happenedAt")]
    public DateTimeOffset? HappenedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
