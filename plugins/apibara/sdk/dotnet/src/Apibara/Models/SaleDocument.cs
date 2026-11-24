using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models;

/// <summary>
/// Normalized auction sale/title document metadata. issuing_state is the document/title issuer state and is distinct from the auction yard/location state.
/// </summary>
public record SaleDocument
{
    /// <summary>
    /// Normalized sale document name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Source-style display label preserving the title issuing state when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw_name")]
    public string? RawName { get; init; }

    /// <summary>
    /// State that issued the title/document when explicitly supplied by the auction source. This is not the auction yard state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuing_state")]
    public string? IssuingState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("export")]
    public bool? Export { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registration")]
    public bool? Registration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_pending")]
    public bool? IsPending { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_status")]
    public PendingStatus? PendingStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_source")]
    public string? PendingSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_id")]
    public int? PageId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_document_group")]
    public string? SaleDocumentGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
