using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Button
{
    /// <summary>
    /// The text that appears on the button. Use this to tell the user what value is returned when they choose this button.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
