using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

/// <summary>
/// legit, sales_pitch, spam and scam on a qualification are also community reports (jid.com/privacy section 2b).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Outcome>))]
public sealed record Outcome : OpenStringEnum<Outcome>
{
    private Outcome(string value) : base(value)
    {
    }

    public static readonly Outcome Legit = new("legit");

    public static readonly Outcome SalesPitch = new("sales_pitch");

    public static readonly Outcome Spam = new("spam");

    public static readonly Outcome Scam = new("scam");

    public static readonly Outcome Closed = new("closed");

    public static readonly Outcome Good = new("good");

    public static readonly Outcome Junk = new("junk");

    public static readonly Outcome NoResponse = new("no_response");

    public TResult Match<TResult>(Func<TResult> onLegit,
        Func<TResult> onSalesPitch,
        Func<TResult> onSpam,
        Func<TResult> onScam,
        Func<TResult> onClosed,
        Func<TResult> onGood,
        Func<TResult> onJunk,
        Func<TResult> onNoResponse,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Legit => onLegit(),
            _ when this == SalesPitch => onSalesPitch(),
            _ when this == Spam => onSpam(),
            _ when this == Scam => onScam(),
            _ when this == Closed => onClosed(),
            _ when this == Good => onGood(),
            _ when this == Junk => onJunk(),
            _ when this == NoResponse => onNoResponse(),
            _ => otherwise(Value)
        };

    public void Match(Action onLegit,
        Action onSalesPitch,
        Action onSpam,
        Action onScam,
        Action onClosed,
        Action onGood,
        Action onJunk,
        Action onNoResponse,
        Action<string> otherwise)
    {
        if (this == Legit) onLegit();
        else if (this == SalesPitch) onSalesPitch();
        else if (this == Spam) onSpam();
        else if (this == Scam) onScam();
        else if (this == Closed) onClosed();
        else if (this == Good) onGood();
        else if (this == Junk) onJunk();
        else if (this == NoResponse) onNoResponse();
        else otherwise(Value);
    }
}
