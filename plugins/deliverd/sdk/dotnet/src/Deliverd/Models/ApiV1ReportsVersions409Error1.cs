using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsVersions409Error1
{
    [JsonPropertyName("error")]
    public required ErrorDeliverdDevReportsApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
