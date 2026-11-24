using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Lusha = new("lusha");

    public static readonly TypeEnum Crm = new("crm");

    public static readonly TypeEnum Signal = new("signal");

    public static readonly TypeEnum Ai = new("ai");

    public static readonly TypeEnum Score = new("score");

    public TResult Match<TResult>(Func<TResult> onLusha,
        Func<TResult> onCrm,
        Func<TResult> onSignal,
        Func<TResult> onAi,
        Func<TResult> onScore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Lusha => onLusha(),
            _ when this == Crm => onCrm(),
            _ when this == Signal => onSignal(),
            _ when this == Ai => onAi(),
            _ when this == Score => onScore(),
            _ => otherwise(Value)
        };

    public void Match(Action onLusha,
        Action onCrm,
        Action onSignal,
        Action onAi,
        Action onScore,
        Action<string> otherwise)
    {
        if (this == Lusha) onLusha();
        else if (this == Crm) onCrm();
        else if (this == Signal) onSignal();
        else if (this == Ai) onAi();
        else if (this == Score) onScore();
        else otherwise(Value);
    }
}
