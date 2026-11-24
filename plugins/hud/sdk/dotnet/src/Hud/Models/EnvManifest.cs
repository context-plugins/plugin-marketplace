using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// What build introspection captured from a v6 image's control channel.
/// </summary>
public record EnvManifest
{
    /// <summary>
    /// Env identity from the control channel's <c>hello</c> reply.
    /// </summary>
    [JsonPropertyName("env")]
    public required ManifestEnv Env { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("capabilities")]
    public IReadOnlyList<ManifestCapability>? Capabilities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<ManifestTask>? Tasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
