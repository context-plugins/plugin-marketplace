using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record CallAnalyticsTranscriptResultStream
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UtteranceEvent")]
    public UtteranceEvent? UtteranceEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CategoryEvent")]
    public CategoryEvent? CategoryEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BadRequestException")]
    public BadRequestException? BadRequestException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LimitExceededException")]
    public LimitExceededException? LimitExceededException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InternalFailureException")]
    public InternalFailureException? InternalFailureException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ConflictException")]
    public ConflictException? ConflictException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceUnavailableException")]
    public ServiceUnavailableException? ServiceUnavailableException { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
