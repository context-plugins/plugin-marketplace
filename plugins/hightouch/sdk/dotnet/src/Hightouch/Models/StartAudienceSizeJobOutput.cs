using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record StartAudienceSizeJobOutput
{
    [JsonPropertyName("jobId")]
    public required string JobId { get; init; }
}
