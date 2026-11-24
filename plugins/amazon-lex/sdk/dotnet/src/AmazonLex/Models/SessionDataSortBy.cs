using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SessionDataSortBy
{
    /// <summary>
    /// The measure by which to sort the session analytics data. conversationStartTime – The date and time when the conversation began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId. numberOfTurns – The number of turns that the session took. conversationDurationSeconds – The duration of the conversation in seconds.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name25 Name { get; init; }

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order2 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
