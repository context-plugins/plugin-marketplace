using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationAttributesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<AttributeModel>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
