using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Current Connector method
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Web = new("web");

    public static readonly Method OpenBanking = new("open-banking");

    public static readonly Method Csv = new("csv");

    public static readonly Method Pdf = new("pdf");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onOpenBanking,
        Func<TResult> onCsv,
        Func<TResult> onPdf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == OpenBanking => onOpenBanking(),
            _ when this == Csv => onCsv(),
            _ when this == Pdf => onPdf(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb, Action onOpenBanking, Action onCsv, Action onPdf, Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == OpenBanking) onOpenBanking();
        else if (this == Csv) onCsv();
        else if (this == Pdf) onPdf();
        else otherwise(Value);
    }
}
