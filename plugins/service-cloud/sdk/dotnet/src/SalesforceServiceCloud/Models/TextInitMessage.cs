using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

public record TextInitMessage
{
    /// <summary>
    /// Initial message from the customer to the bot to begin a session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }
}
