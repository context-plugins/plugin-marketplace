using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesVersions400Error
{
    [JsonPropertyName("error")]
    public required ErrorDeliverdDevPoliciesApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
