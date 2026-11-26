using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// API response for creating a reimbursement image upload URL.
/// </summary>
public record ReimbursementImageUploadUrlResponseDto
{
    /// <summary>
    /// Pre-signed URL for uploading a receipt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
