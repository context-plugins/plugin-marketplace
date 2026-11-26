using System.Collections.Generic;
using System.Text.Json.Serialization;
using EinsteinBots.Models.AnyOf;

namespace EinsteinBots.Models;

public record InitMessageEnvelope
{
    /// <summary>
    /// UUID in string format for the conversation. You can use this parameter to trace the conversation in your bot's event logs.
    /// </summary>
    [JsonPropertyName("externalSessionKey")]
    public required string ExternalSessionKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public TextInitMessage? Message { get; init; }

    /// <summary>
    /// API configuration parameters.
    /// </summary>
    [JsonPropertyName("forceConfig")]
    public required ForceConfig ForceConfig { get; init; }

    /// <summary>
    /// Configuration of additional information returned in the response payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseOptions")]
    public ResponseOptions? ResponseOptions { get; init; }

    /// <summary>
    /// Client timezone where the customer starts the chat.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tz")]
    public string? Tz { get; init; }

    /// <summary>
    /// Array of custom and context variables passed to the bot when initiating a session (see <see href="https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&amp;type=5&amp;_ga=2.50520745.1281711304.1657558186-1967832163.1652719780">What’s a Variable?</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<Variable>? Variables { get; init; }

    /// <summary>
    /// Array of referrers of transferring the session to another bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referrers")]
    public IReadOnlyList<Referrer>? Referrers { get; init; }
}
