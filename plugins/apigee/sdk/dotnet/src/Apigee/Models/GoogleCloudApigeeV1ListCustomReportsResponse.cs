using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// This message encapsulates a list of custom report definitions
/// </summary>
public record GoogleCloudApigeeV1ListCustomReportsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qualifier")]
    public IReadOnlyList<GoogleCloudApigeeV1CustomReport>? Qualifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
