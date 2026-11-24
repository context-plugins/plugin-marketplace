using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record UndeprecateActivityTypeInput
{
    /// <summary>
    /// The name of the domain of the deprecated activity type.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("activityType")]
    public required ActivityType ActivityType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
