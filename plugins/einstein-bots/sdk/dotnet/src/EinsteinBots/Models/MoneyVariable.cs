using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

public record MoneyVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a money variable storing the currency and amount.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "money";

    /// <summary>
    /// Money in format '3_LETTER_CURRENCY_CODE AMOUNT'.
    /// </summary>
    [JsonPropertyName("value")]
    public required string? Value { get; init; }
}
