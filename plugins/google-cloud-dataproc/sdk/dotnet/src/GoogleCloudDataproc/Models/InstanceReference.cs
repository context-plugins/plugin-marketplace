using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A reference to a Compute Engine instance.
/// </summary>
public record InstanceReference
{
    /// <summary>
    /// The user-friendly name of the Compute Engine instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceName")]
    public string? InstanceName { get; init; }

    /// <summary>
    /// The unique identifier of the Compute Engine instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceId")]
    public string? InstanceId { get; init; }

    /// <summary>
    /// The public ECIES key used for sharing data with this instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicEciesKey")]
    public string? PublicEciesKey { get; init; }

    /// <summary>
    /// The public RSA key used for sharing data with this instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicKey")]
    public string? PublicKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
