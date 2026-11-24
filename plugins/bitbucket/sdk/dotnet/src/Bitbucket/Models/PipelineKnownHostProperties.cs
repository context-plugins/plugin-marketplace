using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

public record PipelineKnownHostProperties
{
    /// <summary>
    /// The UUID identifying the known host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// The hostname of the known host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// The public key of the known host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public_key")]
    public PipelineSshPublicKey2? PublicKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
