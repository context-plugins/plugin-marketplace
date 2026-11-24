using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Legislation>))]
public sealed record Legislation : OpenStringEnum<Legislation>
{
    private Legislation(string value) : base(value)
    {
    }

    public static readonly Legislation World = new("WORLD");

    public static readonly Legislation Ch = new("CH");

    public static readonly Legislation Eu = new("EU");

    public static readonly Legislation ChEu = new("CH_EU");

    public TResult Match<TResult>(Func<TResult> onWorld,
        Func<TResult> onCh,
        Func<TResult> onEu,
        Func<TResult> onChEu,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == World => onWorld(),
            _ when this == Ch => onCh(),
            _ when this == Eu => onEu(),
            _ when this == ChEu => onChEu(),
            _ => otherwise(Value)
        };

    public void Match(Action onWorld, Action onCh, Action onEu, Action onChEu, Action<string> otherwise)
    {
        if (this == World) onWorld();
        else if (this == Ch) onCh();
        else if (this == Eu) onEu();
        else if (this == ChEu) onChEu();
        else otherwise(Value);
    }
}
