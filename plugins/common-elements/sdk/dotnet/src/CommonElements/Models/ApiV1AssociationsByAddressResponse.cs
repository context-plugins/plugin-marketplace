using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record ApiV1AssociationsByAddressResponse
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("data")]
    public required IReadOnlyList<Datum1> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
