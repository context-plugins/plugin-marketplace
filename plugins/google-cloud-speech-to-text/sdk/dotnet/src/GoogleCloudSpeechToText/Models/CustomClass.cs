using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Models.Enums;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
/// </summary>
public record CustomClass
{
    /// <summary>
    /// Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or less. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customClassId")]
    public string? CustomClassId { get; init; }

    /// <summary>
    /// Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    /// <summary>
    /// Output only. The <see href="https://cloud.google.com/kms/docs/resource-hierarchy#key_versions">KMS key version name</see> with which content of the ClassItem is encrypted. The expected format is <c>projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyVersionName")]
    public string? KmsKeyVersionName { get; init; }

    /// <summary>
    /// The resource name of the custom class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. System-assigned unique identifier for the CustomClass. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// A collection of class items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<ClassItem>? Items { get; init; }

    /// <summary>
    /// Output only. Whether or not this CustomClass is in the process of being updated. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reconciling")]
    public bool? Reconciling { get; init; }

    /// <summary>
    /// Output only. The time at which this resource will be purged. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expireTime")]
    public string? ExpireTime { get; init; }

    /// <summary>
    /// Output only. The <see href="https://cloud.google.com/kms/docs/resource-hierarchy#keys">KMS key name</see> with which the content of the ClassItem is encrypted. The expected format is <c>projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyName")]
    public string? KmsKeyName { get; init; }

    /// <summary>
    /// Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotations")]
    public IReadOnlyDictionary<string, string>? Annotations { get; init; }

    /// <summary>
    /// Output only. The CustomClass lifecycle state. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Output only. The time at which this resource was requested for deletion. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteTime")]
    public string? DeleteTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
