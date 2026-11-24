using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreditPreference>))]
public sealed record CreditPreference : OpenStringEnum<CreditPreference>
{
    private CreditPreference(string value) : base(value)
    {
    }

    public static readonly CreditPreference Auto = new("auto");

    public static readonly CreditPreference Credits = new("credits");

    public TResult Match<TResult>(Func<TResult> onAuto, Func<TResult> onCredits, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Credits => onCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onCredits, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Credits) onCredits();
        else otherwise(Value);
    }
}
