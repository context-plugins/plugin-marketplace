using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1ListSharedFlowsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharedFlows")]
    public IReadOnlyList<GoogleCloudApigeeV1SharedFlow>? SharedFlows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
