using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The method by which the resource was created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreatedVia>))]
public sealed record CreatedVia : OpenStringEnum<CreatedVia>
{
    private CreatedVia(string value) : base(value)
    {
    }

    public static readonly CreatedVia Api = new("API");

    public static readonly CreatedVia AccountUpdater = new("ACCOUNT_UPDATER");

    public static readonly CreatedVia SettlementReport = new("SETTLEMENT_REPORT");

    public static readonly CreatedVia System = new("SYSTEM");

    public static readonly CreatedVia TokenImport = new("TOKEN_IMPORT");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onAccountUpdater,
        Func<TResult> onSettlementReport,
        Func<TResult> onSystem,
        Func<TResult> onTokenImport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == AccountUpdater => onAccountUpdater(),
            _ when this == SettlementReport => onSettlementReport(),
            _ when this == System => onSystem(),
            _ when this == TokenImport => onTokenImport(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi,
        Action onAccountUpdater,
        Action onSettlementReport,
        Action onSystem,
        Action onTokenImport,
        Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == AccountUpdater) onAccountUpdater();
        else if (this == SettlementReport) onSettlementReport();
        else if (this == System) onSystem();
        else if (this == TokenImport) onTokenImport();
        else otherwise(Value);
    }
}
