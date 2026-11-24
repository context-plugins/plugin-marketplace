using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record SignatureDocumentUpload
{
    /// <summary>
    /// Base64 encoded bytes of the document. Maximum document size is <b>112.5 MB</b> unencoded (<b>150 MB</b> Base64-encoded).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
