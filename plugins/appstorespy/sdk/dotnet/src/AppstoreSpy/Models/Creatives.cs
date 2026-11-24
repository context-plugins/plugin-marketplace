using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.AnyOf;

namespace AppstoreSpy.Models;

public record Creatives
{
    [JsonPropertyName("video")]
    public required AppCreativeVideo Video { get; init; }

    [JsonPropertyName("image")]
    public required Image Image { get; init; }

    [JsonPropertyName("fb")]
    public required IReadOnlyList<string> Fb { get; init; }

    [JsonPropertyName("network")]
    public required Network Network { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
