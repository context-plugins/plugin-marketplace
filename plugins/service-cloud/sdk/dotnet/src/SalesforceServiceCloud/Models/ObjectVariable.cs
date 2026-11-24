using System.Collections.Generic;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.AnyOf;

namespace SalesforceServiceCloud.Models;

public record ObjectVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of an object variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "object";

    /// <summary>
    /// Variable value is an object.
    /// </summary>
    [JsonPropertyName("value")]
    public required IReadOnlyList<Variable>? Value { get; init; }
}
