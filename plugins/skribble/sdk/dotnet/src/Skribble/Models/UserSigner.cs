using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Models;

public record UserSigner
{
    /// <summary>
    /// Optional signing order for this signer, starting at <c>1</c>. If no sequence is supplied, signers can sign in any order. When a number is set, Skribble enforces an ascending signing order across all signers, based on their <c>sequence</c> values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sequence")]
    public int? Sequence { get; init; } = -1;

    /// <summary>
    /// Whether to send a notification to this signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify")]
    public bool? Notify { get; init; } = true;

    /// <summary>
    /// Visual signatures to place on the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("document_signatures")]
    public IReadOnlyList<SignerDocumentToSign>? DocumentSignatures { get; init; }

    /// <summary>
    /// Optional signer account email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_email")]
    [Format(FormatKind.Email)]
    public string? AccountEmail { get; init; }

    /// <summary>
    /// Optional (no-account) signer identity information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signer_identity_data")]
    public SignerIdentityData? SignerIdentityData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
