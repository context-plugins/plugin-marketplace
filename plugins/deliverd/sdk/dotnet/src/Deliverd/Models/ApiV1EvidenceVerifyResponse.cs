using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1EvidenceVerifyResponse
{
    /// <summary>
    /// The digest recomputes and the signature is valid.
    /// </summary>
    [JsonPropertyName("verified")]
    public required bool Verified { get; init; }

    [JsonPropertyName("digestValid")]
    public required bool DigestValid { get; init; }

    /// <summary>
    /// <c>unsigned</c>: the pack carries no signature. <c>no_key</c>: it is signed but this deployment has no key to check it with. <c>invalid</c>: the signature or key id does not match.
    /// </summary>
    [JsonPropertyName("signature")]
    public required Signature Signature { get; init; }

    /// <summary>
    /// The key the pack says it was signed with.
    /// </summary>
    [JsonPropertyName("keyId")]
    public required string? KeyId { get; init; }

    /// <summary>
    /// The key this deployment signs with now.
    /// </summary>
    [JsonPropertyName("currentKeyId")]
    public required string? CurrentKeyId { get; init; }

    /// <summary>
    /// The audit chain head the pack recorded when it was taken.
    /// </summary>
    [JsonPropertyName("chainHead")]
    public required ChainHead? ChainHead { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
