using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Sm1
{
    /// <summary>
    /// Source number from numbers_index, purchases_index; it must be one of your numbers with SMS enabled (in numbers_index its <c>services</c> include <c>sms</c>) or one of your approved sender IDs
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// Destination phone number (must be a valid international number)
    /// </summary>
    [JsonPropertyName("destination")]
    public required string Destination { get; init; }

    /// <summary>
    /// SMS text content (160 chars per segment)
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
