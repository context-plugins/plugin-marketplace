using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

/// <summary>
/// API configuration parameters.
/// </summary>
public record ForceConfig
{
    /// <summary>
    /// Instance URL of your Salesforce org. You can find the value in the <b>ForceConfig Endpoint</b> field of the <b>Add Connection</b> dialog when you add the connected app to the bot (see <see href="https://developer.salesforce.com/docs/service/einstein-bot-api/guide/prerequisites.html">Get Started with Einstein Bot API</see>).
    /// </summary>
    [JsonPropertyName("endpoint")]
    public required string Endpoint { get; init; }
}
