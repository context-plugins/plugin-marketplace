using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record VehicleChangesResponse
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("data")]
    public required IReadOnlyList<VehicleChangeEvent> Data { get; init; }

    [JsonPropertyName("meta")]
    public required Meta1 Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
