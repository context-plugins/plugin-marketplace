using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Salutation>))]
public sealed record Salutation : OpenStringEnum<Salutation>
{
    private Salutation(string value) : base(value)
    {
    }

    public static readonly Salutation Mr = new("Mr.");

    public static readonly Salutation Mrs = new("Mrs.");

    public static readonly Salutation Miss = new("Miss");

    public static readonly Salutation Ms = new("Ms.");

    public static readonly Salutation Dr = new("Dr.");

    public static readonly Salutation Prof = new("Prof.");

    public TResult Match<TResult>(Func<TResult> onMr,
        Func<TResult> onMrs,
        Func<TResult> onMiss,
        Func<TResult> onMs,
        Func<TResult> onDr,
        Func<TResult> onProf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mr => onMr(),
            _ when this == Mrs => onMrs(),
            _ when this == Miss => onMiss(),
            _ when this == Ms => onMs(),
            _ when this == Dr => onDr(),
            _ when this == Prof => onProf(),
            _ => otherwise(Value)
        };

    public void Match(Action onMr,
        Action onMrs,
        Action onMiss,
        Action onMs,
        Action onDr,
        Action onProf,
        Action<string> otherwise)
    {
        if (this == Mr) onMr();
        else if (this == Mrs) onMrs();
        else if (this == Miss) onMiss();
        else if (this == Ms) onMs();
        else if (this == Dr) onDr();
        else if (this == Prof) onProf();
        else otherwise(Value);
    }
}
