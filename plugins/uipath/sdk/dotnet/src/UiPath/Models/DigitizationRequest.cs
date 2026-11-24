using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Request payload for digitizing a document
/// </summary>
public record DigitizationRequest
{
    /// <summary>
    /// Reference identifier for the document. This can be a file path or a document reference key used by UiPath activities.
    /// </summary>
    [JsonPropertyName("documentId")]
    public required string DocumentId { get; init; }

    /// <summary>
    /// MIME type of the document being submitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public ContentType? ContentType { get; init; }

    /// <summary>
    /// Base64-encoded document content when submitting inline
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentBase64")]
    public string? DocumentBase64 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
