using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Search1Api.Models;

public record FeedbackResponse
{
    [JsonPropertyName("id")]
    [MaxLength(80)]
    [RegularExpression("^fb_[a-zA-Z0-9_-]+$")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "new";
}
