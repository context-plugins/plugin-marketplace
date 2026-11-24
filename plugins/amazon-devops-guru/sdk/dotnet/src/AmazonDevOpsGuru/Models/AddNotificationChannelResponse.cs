using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AddNotificationChannelResponse
{
    /// <summary>
    /// The ID of the added notification channel.
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
