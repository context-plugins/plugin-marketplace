using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record InternalServerException
{
    [JsonPropertyName("Message")]
    public required string Message { get; init; }

    /// <summary>
    /// The number of seconds after which the action that caused the internal server exception can be retried.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetryAfterSeconds")]
    public int? RetryAfterSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
