using System.Collections.Generic;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;
using Leadspace.Models.Enums;

namespace Leadspace.Models;

public record IntentModeling
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model_level")]
    public IReadOnlyList<ModelLevel>? ModelLevel { get; init; }

    /// <summary>
    /// Either LS Intent or Bombora
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cadence")]
    public string? Cadence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_high_intent")]
    public string? NewHighIntent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industries")]
    public IReadOnlyList<string>? Industries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_metros")]
    public IReadOnlyList<string>? TopMetros { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain_origins")]
    public IReadOnlyList<string>? DomainOrigins { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
