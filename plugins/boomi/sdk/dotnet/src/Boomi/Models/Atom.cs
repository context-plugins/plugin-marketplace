using System;
using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

/// <summary>
/// A Boomi Atom — the lightweight runtime engine that executes integration processes.
/// </summary>
public record Atom
{
    /// <summary>
    /// Unique identifier of the Atom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the Atom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Current online/offline status of the Atom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Atom type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Hostname of the machine running the Atom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostName")]
    public string? HostName { get; init; }

    /// <summary>
    /// Current Boomi runtime version installed on the Atom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentVersion")]
    public string? CurrentVersion { get; init; }

    /// <summary>
    /// Timestamp when the Atom was installed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateInstalled")]
    public DateTimeOffset? DateInstalled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
