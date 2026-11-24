using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record PipelineConfig
{
    /// <summary>
    /// The source configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// The compiled configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compiled")]
    public string? Compiled { get; init; }

    /// <summary>
    /// The setup configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("setup-config")]
    public string? SetupConfig { get; init; }

    /// <summary>
    /// The compiled setup configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compiled-setup-config")]
    public string? CompiledSetupConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
