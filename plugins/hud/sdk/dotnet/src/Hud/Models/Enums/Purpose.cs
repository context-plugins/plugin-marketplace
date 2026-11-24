using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Purpose>))]
public sealed record Purpose : OpenStringEnum<Purpose>
{
    private Purpose(string value) : base(value)
    {
    }

    public static readonly Purpose Eval = new("EVAL");

    public static readonly Purpose Training = new("TRAINING");

    public TResult Match<TResult>(Func<TResult> onEval, Func<TResult> onTraining, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eval => onEval(),
            _ when this == Training => onTraining(),
            _ => otherwise(Value)
        };

    public void Match(Action onEval, Action onTraining, Action<string> otherwise)
    {
        if (this == Eval) onEval();
        else if (this == Training) onTraining();
        else otherwise(Value);
    }
}
