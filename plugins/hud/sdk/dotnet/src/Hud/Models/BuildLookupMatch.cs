using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record BuildLookupMatch
{
    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public VersionModel? Version { get; init; }

    [JsonPropertyName("content_digest")]
    public required string ContentDigest { get; init; }

    [JsonPropertyName("environment")]
    public required BuildLookupEnvironment Environment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
