using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;
using AmazonEbs.Models.Enums;

namespace AmazonEbs.Models;

public record ServiceQuotaExceededExceptionError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// The reason for the exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reason")]
    public Reason3? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
