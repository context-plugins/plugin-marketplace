using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum App = new("APP");

    public static readonly TypeEnum Game = new("GAME");

    public TResult Match<TResult>(Func<TResult> onApp, Func<TResult> onGame, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == App => onApp(),
            _ when this == Game => onGame(),
            _ => otherwise(Value)
        };

    public void Match(Action onApp, Action onGame, Action<string> otherwise)
    {
        if (this == App) onApp();
        else if (this == Game) onGame();
        else otherwise(Value);
    }
}
