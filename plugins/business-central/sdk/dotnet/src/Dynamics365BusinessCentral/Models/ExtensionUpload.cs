using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record ExtensionUpload
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("systemId")]
    public Guid? SystemId { get; init; }

    /// <summary>
    /// When to schedule the installation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule? Schedule { get; init; }

    /// <summary>
    /// Schema synchronization mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaSyncMode")]
    public SchemaSyncMode? SchemaSyncMode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
