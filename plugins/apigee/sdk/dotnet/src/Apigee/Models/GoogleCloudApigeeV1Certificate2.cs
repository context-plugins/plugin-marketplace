using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Chain of certificates under this alias.
/// </summary>
public record GoogleCloudApigeeV1Certificate2
{
    /// <summary>
    /// Chain of certificates under this name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certInfo")]
    public IReadOnlyList<GoogleCloudApigeeV1CertInfo>? CertInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
