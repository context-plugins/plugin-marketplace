using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record StartConversationRequestEventStream
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ConfigurationEvent")]
    public ConfigurationEvent? ConfigurationEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AudioInputEvent")]
    public AudioInputEvent? AudioInputEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DTMFInputEvent")]
    public DtmfInputEvent? DtmfInputEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextInputEvent")]
    public TextInputEvent? TextInputEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PlaybackCompletionEvent")]
    public PlaybackCompletionEvent? PlaybackCompletionEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DisconnectionEvent")]
    public DisconnectionEvent? DisconnectionEvent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
