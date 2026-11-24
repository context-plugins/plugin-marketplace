using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Schema for the structured data extracted into each matching event.
/// </summary>
public record SignalMonitoringPlanDataSchema
{
    /// <summary>
    /// Data schema version. Currently only V1 is supported.
    /// </summary>
    [JsonPropertyName("version")]
    public string Version { get; } = "V1";

    /// <summary>
    /// Whether extracted event data may contain fields not defined in schema. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowExtra")]
    public bool? AllowExtra { get; init; }

    /// <summary>
    /// Structured event field definitions keyed by output field name.
    /// </summary>
    [JsonPropertyName("schema")]
    public required IReadOnlyDictionary<string, SignalMonitoringPlanDataSchemaProperty> Schema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
