using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1Policies400Error1
{
    [JsonPropertyName("error")]
    public required ErrorDeliverdDevPoliciesApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
