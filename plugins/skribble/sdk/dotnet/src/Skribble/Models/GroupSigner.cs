using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record GroupSigner
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
    /// Signer group ID.
    /// </summary>
    [JsonPropertyName("signer_group_id")]
    public required string SignerGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
