using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record DeepcrawlAcceptedResponse
{
    [JsonPropertyName("taskId")]
    public required string TaskId { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "queued";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
