using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record Scope1
{
    /// <summary>
    /// The scope ID (project ID)
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The scope type
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "project";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
