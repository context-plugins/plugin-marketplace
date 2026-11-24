using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for GenerateUploadUrl method.
/// </summary>
public record GoogleCloudApigeeV1GenerateUploadUrlResponse
{
    /// <summary>
    /// The Google Cloud Storage signed URL that can be used to upload a new Archive zip file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadUri")]
    public string? UploadUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
