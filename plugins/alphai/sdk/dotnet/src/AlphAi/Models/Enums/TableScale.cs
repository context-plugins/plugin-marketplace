using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// The unit the filing's own table headers name (<c>(In millions, except per share data)</c>). The prose and list fields (<c>analysis</c>, <c>balance_sheet_cash_flow</c>, <c>capital_returns</c>, <c>concerns</c>, …) quote table figures as printed, so in a read with <c>table_scale: millions</c> a bare <c>$36,197</c> there is $36,197 million; per-share figures are always as printed. Null when the headers name no unit or name two without a clear majority. Added 2026-10-01 to every stored read.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TableScale>))]
public sealed record TableScale : OpenStringEnum<TableScale>
{
    private TableScale(string value) : base(value)
    {
    }

    public static readonly TableScale Thousands = new("thousands");

    public static readonly TableScale Millions = new("millions");

    public static readonly TableScale Billions = new("billions");

    public TResult Match<TResult>(Func<TResult> onThousands,
        Func<TResult> onMillions,
        Func<TResult> onBillions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Thousands => onThousands(),
            _ when this == Millions => onMillions(),
            _ when this == Billions => onBillions(),
            _ => otherwise(Value)
        };

    public void Match(Action onThousands, Action onMillions, Action onBillions, Action<string> otherwise)
    {
        if (this == Thousands) onThousands();
        else if (this == Millions) onMillions();
        else if (this == Billions) onBillions();
        else otherwise(Value);
    }
}
