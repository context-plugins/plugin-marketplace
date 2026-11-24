using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

/// <summary>
/// A data model defining the schema and matching rules for a master data domain.
/// </summary>
public record Model
{
    /// <summary>
    /// Unique identifier of the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Current version number of the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public int? Version { get; init; }

    /// <summary>
    /// Version number of the last published model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishedVersion")]
    public int? PublishedVersion { get; init; }

    /// <summary>
    /// Publication status of the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusBoomiDataHubModelsApi? Status { get; init; }

    /// <summary>
    /// Field definitions for this model's schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<ModelField>? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
