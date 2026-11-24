using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Can be used to customize security settings for Eventarc first-party triggers in a specific region. Once the GoogleChannelConfig resource is configured, first-party event data is protected using the specified customer-managed encryption key instead of a Google-managed encryption key.
/// </summary>
public record GoogleChannelConfig
{
    /// <summary>
    /// Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern <c>projects/*/locations/*/keyRings/*/cryptoKeys/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cryptoKeyName")]
    public string? CryptoKeyName { get; init; }

    /// <summary>
    /// Output only. The last-modified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The resource name of the config. Must be in the format of, <c>projects/{project}/locations/{location}/googleChannelConfig</c>. In API responses, the config name always includes the projectID, regardless of whether the projectID or projectNumber was provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Resource labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
