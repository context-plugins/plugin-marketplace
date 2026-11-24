using System.Collections.Generic;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models;

public record ListVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Object variable that contains a list.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "list";

    /// <summary>
    /// Array of objects.
    /// </summary>
    [JsonPropertyName("value")]
    public required IReadOnlyList<object>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
