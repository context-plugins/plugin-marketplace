using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record GetGraphqlApiEnvironmentVariablesResponse
{
    /// <summary>
    /// The payload containing each environmental variable in the "key" : "value" format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentVariables")]
    public IReadOnlyDictionary<string, string>? EnvironmentVariables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
