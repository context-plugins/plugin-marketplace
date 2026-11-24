using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Open = new("open");

    public static readonly Type1 Won = new("won");

    public static readonly Type1 Lost = new("lost");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onWon,
        Func<TResult> onLost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Won => onWon(),
            _ when this == Lost => onLost(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onWon, Action onLost, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Won) onWon();
        else if (this == Lost) onLost();
        else otherwise(Value);
    }
}
