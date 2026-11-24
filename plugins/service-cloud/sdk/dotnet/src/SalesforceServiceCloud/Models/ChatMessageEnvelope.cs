using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.AnyOf;

namespace SalesforceServiceCloud.Models;

public record ChatMessageEnvelope
{
    /// <summary>
    /// Message to the bot.
    /// </summary>
    [JsonPropertyName("message")]
    public required Message1 Message { get; init; }

    /// <summary>
    /// Configuration of additional information returned in the response payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseOptions")]
    public ResponseOptions? ResponseOptions { get; init; }
}
