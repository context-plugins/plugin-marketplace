using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

public record Receipt
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_id")]
    public string? ReceiptId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Exactly what was signed: type, version, receipt_id, issued_at, issuer, entity, inputs, decision, rules_version, reasons (code, met, effect, fact_ids, source, verified_at, fresh_until), facts (id, predicate, source, value_sha256, verified_at), terms.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement")]
    public object? Statement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature")]
    public Signature? Signature { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verify")]
    public string? Verify { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
