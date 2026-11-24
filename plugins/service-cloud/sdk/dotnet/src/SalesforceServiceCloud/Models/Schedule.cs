using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

public record Schedule
{
    /// <summary>
    /// Delay in ms to display the bot's message to the user. This parameter is set by the bot admin when creating the bot.
    /// </summary>
    [JsonPropertyName("responseDelayMilliseconds")]
    public required int ResponseDelayMilliseconds { get; init; }
}
