using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesVersions404Error
{
    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
