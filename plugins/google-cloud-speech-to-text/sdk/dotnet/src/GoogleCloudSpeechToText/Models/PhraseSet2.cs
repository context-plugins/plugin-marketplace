using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Models.Enums;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Required. The phrase set to create.
/// </summary>
public record PhraseSet2
{
    /// <summary>
    /// Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotations")]
    public IReadOnlyDictionary<string, string>? Annotations { get; init; }

    /// <summary>
    /// Output only. The <see href="https://cloud.google.com/kms/docs/resource-hierarchy#key_versions">KMS key version name</see> with which content of the PhraseSet is encrypted. The expected format is <c>projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyVersionName")]
    public string? KmsKeyVersionName { get; init; }

    /// <summary>
    /// Output only. The time at which this resource will be purged. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expireTime")]
    public string? ExpireTime { get; init; }

    /// <summary>
    /// Output only. The <see href="https://cloud.google.com/kms/docs/resource-hierarchy#keys">KMS key name</see> with which the content of the PhraseSet is encrypted. The expected format is <c>projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyName")]
    public string? KmsKeyName { get; init; }

    /// <summary>
    /// Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The CustomClass lifecycle state. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// The resource name of the phrase set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. System-assigned unique identifier for the PhraseSet. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though <c>boost</c> can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boost")]
    public double? Boost { get; init; }

    /// <summary>
    /// Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    /// <summary>
    /// Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reconciling")]
    public bool? Reconciling { get; init; }

    /// <summary>
    /// A list of word and phrases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phrases")]
    public IReadOnlyList<Phrase>? Phrases { get; init; }

    /// <summary>
    /// Output only. The time at which this resource was requested for deletion. This field is not used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteTime")]
    public string? DeleteTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
