using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record IdrQueueForReprocessingOutput
{
    /// <summary>
    /// ID associated with the reprocessing request. This can be used to query the status of the request.
    /// </summary>
    [JsonPropertyName("requestId")]
    public required string RequestId { get; init; }
}
