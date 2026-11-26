using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason1AlphAiRestRadarApi>))]
public sealed record Reason1AlphAiRestRadarApi : OpenStringEnum<Reason1AlphAiRestRadarApi>
{
    private Reason1AlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly Reason1AlphAiRestRadarApi NonSecSymbol = new("non_sec_symbol");

    public static readonly Reason1AlphAiRestRadarApi UnknownSymbol = new("unknown_symbol");

    public static readonly Reason1AlphAiRestRadarApi MissingCik = new("missing_cik");

    public static readonly Reason1AlphAiRestRadarApi IssuerChanged = new("issuer_changed");

    public TResult Match<TResult>(Func<TResult> onNonSecSymbol,
        Func<TResult> onUnknownSymbol,
        Func<TResult> onMissingCik,
        Func<TResult> onIssuerChanged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NonSecSymbol => onNonSecSymbol(),
            _ when this == UnknownSymbol => onUnknownSymbol(),
            _ when this == MissingCik => onMissingCik(),
            _ when this == IssuerChanged => onIssuerChanged(),
            _ => otherwise(Value)
        };

    public void Match(Action onNonSecSymbol,
        Action onUnknownSymbol,
        Action onMissingCik,
        Action onIssuerChanged,
        Action<string> otherwise)
    {
        if (this == NonSecSymbol) onNonSecSymbol();
        else if (this == UnknownSymbol) onUnknownSymbol();
        else if (this == MissingCik) onMissingCik();
        else if (this == IssuerChanged) onIssuerChanged();
        else otherwise(Value);
    }
}
