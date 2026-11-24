using System.Collections.Generic;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.AnyOf;

namespace SalesforceServiceCloud.Models;

/// <summary>
/// Update existing session variables
/// </summary>
public record SetVariablesMessage
{
    /// <summary>
    /// Message type
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "setVariables";

    /// <summary>
    /// Client-generated sequence number of the message in a session. Increase this number for each subsequent message.
    /// </summary>
    [JsonPropertyName("sequenceId")]
    public required long SequenceId { get; init; }

    /// <summary>
    /// Array of custom and context variables passed to the bot when initiating a session (see <see href="https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&amp;type=5&amp;_ga=2.50520745.1281711304.1657558186-1967832163.1652719780">What’s a Variable?</see>).
    /// </summary>
    [JsonPropertyName("variables")]
    public required IReadOnlyList<Variable>? Variables { get; init; }
}
