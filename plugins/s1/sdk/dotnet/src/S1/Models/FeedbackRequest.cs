using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using S1.Models.Enums;

namespace S1.Models;

public record FeedbackRequest
{
    [JsonPropertyName("message")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent")]
    [MaxLength(2000)]
    public string? Intent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; } = Category.Other;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_id")]
    [MaxLength(256)]
    public string? RequestId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public Agent? Agent { get; init; }
}
