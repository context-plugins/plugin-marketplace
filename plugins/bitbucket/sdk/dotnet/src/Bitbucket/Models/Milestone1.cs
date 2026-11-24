using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record Milestone1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public string? Old { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public string? New { get; init; }
}
