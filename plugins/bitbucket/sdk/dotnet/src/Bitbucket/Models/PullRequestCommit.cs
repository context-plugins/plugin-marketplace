using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record PullRequestCommit
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hash")]
    [RegularExpression("[0-9a-f]{7,}?")]
    public string? Hash { get; init; }
}
