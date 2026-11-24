using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Contains audio data in the encoding specified in the <c>RecognitionConfig</c>. Either <c>content</c> or <c>uri</c> must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See <see href="https://cloud.google.com/speech-to-text/quotas#content">content limits</see>.
/// </summary>
public record RecognitionAudio
{
    /// <summary>
    /// The audio data bytes encoded as specified in <c>RecognitionConfig</c>. Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// URI that points to a file that contains audio data bytes as specified in <c>RecognitionConfig</c>. The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: <c>gs://bucket_name/object_name</c> (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see <see href="https://cloud.google.com/storage/docs/reference-uris">Request URIs</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
