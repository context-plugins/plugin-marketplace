using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Identifies the reviewer in the caller's own approval system.
/// </summary>
public record DraftReviewMetadataInput
{
    /// <summary>
    /// The reviewer's id in the caller's approval system
    /// </summary>
    [JsonPropertyName("extId")]
    [StringLength(255, MinimumLength = 1)]
    public required string ExtId { get; init; }
}
