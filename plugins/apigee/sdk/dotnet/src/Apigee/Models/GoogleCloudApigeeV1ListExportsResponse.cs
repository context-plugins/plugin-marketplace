using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The response for ListExports
/// </summary>
public record GoogleCloudApigeeV1ListExportsResponse
{
    /// <summary>
    /// Details of the export jobs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exports")]
    public IReadOnlyList<GoogleCloudApigeeV1Export>? Exports { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
