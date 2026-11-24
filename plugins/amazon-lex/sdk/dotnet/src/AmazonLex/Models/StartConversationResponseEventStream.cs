using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record StartConversationResponseEventStream
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PlaybackInterruptionEvent")]
    public PlaybackInterruptionEvent? PlaybackInterruptionEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptEvent")]
    public TranscriptEvent? TranscriptEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IntentResultEvent")]
    public IntentResultEvent? IntentResultEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextResponseEvent")]
    public TextResponseEvent? TextResponseEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AudioResponseEvent")]
    public AudioResponseEvent? AudioResponseEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HeartbeatEvent")]
    public HeartbeatEvent? HeartbeatEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AccessDeniedException")]
    public AccessDeniedException? AccessDeniedException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceNotFoundException")]
    public RuntimeV2LexResourceNotFoundException? ResourceNotFoundException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationException")]
    public RuntimeV2LexValidationException? ValidationException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ThrottlingException")]
    public RuntimeV2LexThrottlingException? ThrottlingException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InternalServerException")]
    public RuntimeV2LexInternalServerException? InternalServerException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ConflictException")]
    public RuntimeV2LexConflictException? ConflictException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DependencyFailedException")]
    public DependencyFailedException? DependencyFailedException { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BadGatewayException")]
    public BadGatewayException? BadGatewayException { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
