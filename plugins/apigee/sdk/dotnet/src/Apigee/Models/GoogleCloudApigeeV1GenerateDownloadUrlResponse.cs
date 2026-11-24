using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for GenerateDownloadUrl method.
/// </summary>
public record GoogleCloudApigeeV1GenerateDownloadUrlResponse
{
    /// <summary>
    /// The Google Cloud Storage signed URL that can be used to download the Archive zip file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloadUri")]
    public string? DownloadUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
