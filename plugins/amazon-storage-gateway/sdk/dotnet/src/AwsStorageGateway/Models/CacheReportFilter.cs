using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record CacheReportFilter
{
    /// <summary>
    /// The parameter name for a filter that determines which files are included or excluded from a cache report. Valid Names: UploadFailureReason | UploadState
    /// </summary>
    [JsonPropertyName("Name")]
    public required Name Name { get; init; }

    /// <summary>
    /// The parameter value for a filter that determines which files are included or excluded from a cache report. Valid UploadFailureReason Values: InaccessibleStorageClass | InvalidObjectState | ObjectMissing | S3AccessDenied Valid UploadState Values: FailingUpload
    /// </summary>
    [JsonPropertyName("Values")]
    public required IReadOnlyList<string> Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
