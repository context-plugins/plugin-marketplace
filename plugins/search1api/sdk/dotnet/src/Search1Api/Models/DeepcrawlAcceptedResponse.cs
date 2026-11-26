using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record DeepcrawlAcceptedResponse
{
    [JsonPropertyName("taskId")]
    public required string TaskId { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "queued";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
