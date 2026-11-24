using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A read-only CloudFlow template (blueprint). Use <c>POST /flows</c> with <c>templateId</c> to create a new flow initialised from this template.
/// </summary>
public record CloudflowTemplate
{
    /// <summary>
    /// Unique identifier of the template.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Human-readable display name of the template.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Short summary of what the template does and which use case it addresses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Step-by-step operator guidance for configuring a flow created from this template. <c>null</c> when no instructions have been authored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    public string? Instructions { get; init; }

    /// <summary>
    /// ISO 8601 (UTC) creation timestamp.
    /// </summary>
    [JsonPropertyName("createTime")]
    public required DateTimeOffset CreateTime { get; init; }

    /// <summary>
    /// ISO 8601 (UTC) last-modified timestamp. <c>null</c> if never modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public DateTimeOffset? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
