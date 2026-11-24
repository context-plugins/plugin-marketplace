using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for adding a comment to a support ticket.
/// </summary>
public record CreateCommentRequest
{
    /// <summary>
    /// The text content of the comment. Must not be empty.
    /// </summary>
    [JsonPropertyName("body")]
    public required string Body { get; init; }

    /// <summary>
    /// If true, creates a private internal note. Only honored for DoiT employees; ignored for customers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("private")]
    public bool? Private { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
