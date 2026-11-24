using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MutualFundSipData
{
    /// <summary>
    /// Display name of the fund.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fund")]
    public string? Fund { get; init; }

    /// <summary>
    /// ACTIVE, PAUSED, or CANCELLED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Timestamp when the SIP was registered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    /// <summary>
    /// Frequency (e.g. monthly, weekly).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public string? Frequency { get; init; }

    /// <summary>
    /// Total number of instalments when applicable; -1 if open-ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instalments")]
    public long? Instalments { get; init; }

    /// <summary>
    /// Unique SIP identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sip_id")]
    public string? SipId { get; init; }

    /// <summary>
    /// SIP registration number when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sip_reg_number")]
    public string? SipRegNumber { get; init; }

    /// <summary>
    /// ISIN of the fund, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_key")]
    public string? InstrumentKey { get; init; }

    /// <summary>
    /// Dividend option when available (e.g. growth, idcw).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dividend_type")]
    public string? DividendType { get; init; }

    /// <summary>
    /// BUY or SELL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction_type")]
    public string? TransactionType { get; init; }

    /// <summary>
    /// Next instalment date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_instalment")]
    public string? NextInstalment { get; init; }

    /// <summary>
    /// Amount per instalment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instalment_amount")]
    public double? InstalmentAmount { get; init; }

    /// <summary>
    /// Last triggered instalment timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_instalment")]
    public string? LastInstalment { get; init; }

    /// <summary>
    /// Pending instalments when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_instalments")]
    public long? PendingInstalments { get; init; }

    /// <summary>
    /// Day of month for monthly SIPs when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instalment_day")]
    public long? InstalmentDay { get; init; }

    /// <summary>
    /// Completed instalment count when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_instalments")]
    public long? CompletedInstalments { get; init; }

    /// <summary>
    /// Trigger price when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_price")]
    public double? TriggerPrice { get; init; }

    /// <summary>
    /// SIP channel/type (e.g. sip, amc_sip).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sip_type")]
    public string? SipType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
