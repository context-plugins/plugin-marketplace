using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

/// <summary>
/// Dividend lifecycle dates. <c>null</c> for non-dividend events. <c>scheduled_at</c> follows the priority ex-date &gt; record-date &gt; payment-date, whichever is explicitly stated.
/// </summary>
public record Dividend
{
    /// <summary>
    /// Ex-dividend date (YYYY-MM-DD). The market-event anchor: share price drops on this day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ex_date")]
    public string? ExDate { get; init; }

    /// <summary>
    /// Record date (YYYY-MM-DD). Holders of record on this date receive the dividend.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("record_date")]
    public string? RecordDate { get; init; }

    /// <summary>
    /// Payment date (YYYY-MM-DD). When the cash is distributed to shareholders.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_date")]
    public string? PaymentDate { get; init; }

    /// <summary>
    /// Declaration / announcement date (YYYY-MM-DD). Metadata only, never used as the calendar anchor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("declaration_date")]
    public string? DeclarationDate { get; init; }

    /// <summary>
    /// Tranche type. <c>ordinary</c> for the recurring/regular dividend; <c>special</c> for an extra/bonus/one-off dividend. When an issuer proposes both for the same date, they are returned as two separate events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind? Kind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
