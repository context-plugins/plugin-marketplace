using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ListNotificationChannelsResponse
{
    /// <summary>
    /// An array that contains the requested notification channels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Channels")]
    public IReadOnlyList<NotificationChannel>? Channels { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
