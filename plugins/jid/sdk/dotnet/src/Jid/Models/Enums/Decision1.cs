using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Decision1>))]
public sealed record Decision1 : OpenStringEnum<Decision1>
{
    private Decision1(string value) : base(value)
    {
    }

    public static readonly Decision1 Proceed = new("proceed");

    public static readonly Decision1 Review = new("review");

    public static readonly Decision1 Stop = new("stop");

    public static readonly Decision1 InsufficientData = new("insufficient_data");

    public TResult Match<TResult>(Func<TResult> onProceed,
        Func<TResult> onReview,
        Func<TResult> onStop,
        Func<TResult> onInsufficientData,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Proceed => onProceed(),
            _ when this == Review => onReview(),
            _ when this == Stop => onStop(),
            _ when this == InsufficientData => onInsufficientData(),
            _ => otherwise(Value)
        };

    public void Match(Action onProceed,
        Action onReview,
        Action onStop,
        Action onInsufficientData,
        Action<string> otherwise)
    {
        if (this == Proceed) onProceed();
        else if (this == Review) onReview();
        else if (this == Stop) onStop();
        else if (this == InsufficientData) onInsufficientData();
        else otherwise(Value);
    }
}
