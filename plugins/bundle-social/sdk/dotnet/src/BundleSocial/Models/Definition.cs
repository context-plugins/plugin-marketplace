using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.OneOf;

namespace BundleSocial.Models;

public record Definition
{
    [JsonPropertyName("trigger")]
    public required Trigger Trigger { get; init; }

    [JsonPropertyName("steps")]
    public required IReadOnlyList<Step2> Steps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
