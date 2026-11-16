using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object that sets the configurations for the tipping page if it appears. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
/// </summary>
public record TippingDetails
{
    /// <summary>
    /// Allows the buyer to set a custom tip. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow_custom_tip")]
    public bool? AllowCustomTip { get; init; } = true;

    /// <summary>
    /// Sets the fixed amount that will be displayed on the terminal. Defaults to <c>[100, 150, 200]</c>. Must be three integer values that represent cent values. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixed_options")]
    public IReadOnlyList<object>? FixedOptions { get; init; }

    /// <summary>
    /// Sets the percentages that will be displayed on the terminal. Defaults to <c>[18, 20, 22]</c>. Must be three integer values that represent percentages. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percent_options")]
    public IReadOnlyList<object>? PercentOptions { get; init; }

    /// <summary>
    /// The inclusive value at which the terminal will present a percent based prompt instead of a fixed value prompt. Defaults to <c>false</c>. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percent_tipping_threshold")]
    public int? PercentTippingThreshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
