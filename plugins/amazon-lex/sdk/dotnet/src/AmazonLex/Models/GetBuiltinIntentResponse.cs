using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetBuiltinIntentResponse
{
    /// <summary>
    /// The unique identifier for a built-in intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature")]
    public string? Signature { get; init; }

    /// <summary>
    /// A list of locales that the intent supports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedLocales")]
    public IReadOnlyList<SupportedLocale>? SupportedLocales { get; init; }

    /// <summary>
    /// An array of BuiltinIntentSlot objects, one entry for each slot type in the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyList<BuiltinIntentSlot>? Slots { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
