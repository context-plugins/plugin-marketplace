using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Document response.
/// </summary>
public record DocumentCreateResponseDto
{
    /// <summary>
    /// BILL-generated ID of the upload. This is a temporary BILL-generated ID for the document when the upload is in progress. The value begins with <c>0du</c>.
    /// <para>
    /// When the upload is complete, a new BILL-generated ID is available for the document. The value begins with <c>00h</c>. You can get the document upload status with <c>GET /v3/documents/upload-status</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadId")]
    public string? UploadId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
