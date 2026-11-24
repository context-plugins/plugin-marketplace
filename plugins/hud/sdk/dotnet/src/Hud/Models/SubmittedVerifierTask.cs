using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Nested verifier task carried by a task row.
/// </summary>
public record SubmittedVerifierTask
{
    [JsonPropertyName("env")]
    [MinLength(1)]
    public required string Env { get; init; }

    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public object? Args { get; init; }

    [JsonPropertyName("slug")]
    [MinLength(1)]
    public required string Slug { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation")]
    public ValidationModel? Validation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent_config")]
    public AgentConfig? AgentConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public Columns? Columns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfigModel? RuntimeConfig { get; init; }
}
