using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record ProfilePhoneApi
{
    /// <summary>
    /// The phone number in international format
    /// - Example: <c>+1 234-555-6789</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    public string? Number { get; init; }

    /// <summary>
    /// The phone number in E.164 format
    /// - Example: <c>+12345556789</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("e164")]
    public string? E164 { get; init; }

    /// <summary>
    /// The country code associated with the phone number
    /// - Example: <c>1</c> for United States
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_code")]
    public string? CountryCode { get; init; }

    /// <summary>
    /// The phone extension, if applicable
    /// - Example: <c>123</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extension")]
    public string? Extension { get; init; }

    /// <summary>
    /// The type of phone number. Options are <c>mobile</c>, <c>direct dial</c>, or <c>other</c>.
    /// - Example: <c>mobile</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; } = "unknown";

    /// <summary>
    /// Phone confidence grade.
    /// - <c>A</c> = Best: Confirmed as valid phone and strong identity match signals.
    /// - <c>A-</c> = Likely: Confirmed as valid phone, but unable to confirm identity.
    /// - <c>B</c> = Possible:  Worth trying, especially if better options are not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grade")]
    public string? Grade { get; init; }

    /// <summary>
    /// validity deprecated, please use <c>grade</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validity")]
    public string? Validity { get; init; } = "unknown";

    /// <summary>
    /// Indicates whether this is the recommended phone number to use as the best option for connecting with the person.
    /// - Example: <c>true</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended")]
    public bool? Recommended { get; init; } = false;

    /// <summary>
    /// <c>premium</c> deprecated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium")]
    public bool? Premium { get; init; } = false;

    /// <summary>
    /// <c>last_checked</c> deprecated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_checked")]
    public DateTimeOffset? LastChecked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
