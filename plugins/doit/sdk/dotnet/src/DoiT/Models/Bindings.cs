using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Requirement key → target-tenant resource ID. Keys must be declared in the bundle's requirements. Run with <c>?dryRun=true</c> first to list required keys and candidate IDs.
/// </summary>
public record Bindings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    public IReadOnlyDictionary<string, string>? Connections { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastoreTables")]
    public IReadOnlyDictionary<string, string>? DatastoreTables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("globalVariables")]
    public IReadOnlyDictionary<string, string>? GlobalVariables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
