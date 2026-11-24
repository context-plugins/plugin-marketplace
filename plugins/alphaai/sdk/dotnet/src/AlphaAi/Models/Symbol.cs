using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

public record Symbol
{
    [JsonPropertyName("symbol")]
    public required string SymbolValue { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// <c>Stock</c>, <c>ETF</c>, or <c>Crypto</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asset_type")]
    public string? AssetType { get; init; }

    /// <summary>
    /// TradingView exchange prefix. US: NYSE / NASDAQ / AMEX / OTC / CBOE (from SEC's exchange mapping). Foreign listings carry their venue prefix (LSE, XETR, EURONEXT, TSE, HKEX, KRX, …); crypto carries the <c>CRYPTO</c> sentinel. Empty string when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public string? Exchange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector")]
    public string? Sector { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    [Format(FormatKind.Uri)]
    public string? Website { get; init; }

    /// <summary>
    /// Lowercase names the issuer is known by, when they differ from <c>name</c> (<c>["spacex"]</c> on SPCX, registered as SPACE EXPLORATION TECHNOLOGIES CORP). Use them to match a name a user typed against a ticker. Usually empty: most issuers are already reachable by their registered name. List responses only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand_aliases")]
    public IReadOnlyList<string>? BrandAliases { get; init; }

    /// <summary>
    /// ISO alpha-2 country of domicile. <c>US</c> for SEC-listed symbols, the listing venue's country for foreign listings. Empty for crypto — a coin has no domicile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Trading currency. <c>USD</c> for SEC-listed symbols and crypto pairs, the local currency for foreign listings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// The next earnings date the company itself has confirmed, in America/New_York. Detail responses only.
    /// <para>
    /// <b>Never an estimate.</b> <c>null</c> means AlphAI holds no confirmed date — NOT that the company does not report. Confirmed dates typically surface about five weeks ahead, so <c>null</c> further out is the normal state, and coverage at any moment is partial. We deliberately do not fill the gap with a projection from the reporting cadence: a date nothing corroborates is indistinguishable downstream from one that does.
    /// </para>
    /// <para>
    /// Bridges share classes: a request for one class answers with the issuer's confirmed date whichever class it was filed under.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_report_date")]
    public DateTimeOffset? NextReportDate { get; init; }

    /// <summary>
    /// Whether this symbol has SEC Form 4 insider data — true for US SEC-listed equities, false for exchange-traded funds (<c>asset_type</c> <c>ETF</c>), crypto and foreign listings. When false, <c>/insider-summary/</c> and <c>/insider-trades/</c> return empty rather than failing. Detail responses only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supports_insider")]
    public bool? SupportsInsider { get; init; }

    /// <summary>
    /// When this symbol owns a bare string an ACTIVE cryptocurrency also answers to (delisted SOL = Emeren Group vs the coin SOL-USD, BTC = Grayscale ETF vs BTC-USD), the coin's ticker. <c>null</c> for symbols without an active crypto twin. Detail responses only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crypto_counterpart")]
    public string? CryptoCounterpart { get; init; }

    /// <summary>
    /// Display name of <c>crypto_counterpart</c> (empty when it is null). Detail responses only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crypto_counterpart_name")]
    public string? CryptoCounterpartName { get; init; }

    /// <summary>
    /// Per-symbol TradingView symbol override, when the venue-prefix rule built from <c>exchange</c> does not produce the right chart symbol. Empty for almost every row. Detail responses only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tv_symbol")]
    public string? TvSymbol { get; init; }

    /// <summary>
    /// Listing status, <c>active</c> or <c>delisted</c>. Delisted symbols stay resolvable on this endpoint so their news history remains reachable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// When the symbol was marked delisted. Null for active symbols and for symbols delisted before July 2026.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delisted_at")]
    public DateTimeOffset? DelistedAt { get; init; }

    /// <summary>
    /// Set on a delisted symbol when the company continues under a new ticker (for example SATS became ECHO). Empty otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renamed_to")]
    public string? RenamedTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
