using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Msg>))]
public sealed record Msg : OpenStringEnum<Msg>
{
    private Msg(string value) : base(value)
    {
    }

    public static readonly Msg Alive = new("alive");

    public TResult Match<TResult>(Func<TResult> onAlive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Alive => onAlive(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlive, Action<string> otherwise)
    {
        if (this == Alive) onAlive();
        else otherwise(Value);
    }
}
