using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Outcome>))]
public sealed record Outcome : OpenStringEnum<Outcome>
{
    private Outcome(string value) : base(value)
    {
    }

    public static readonly Outcome Created = new("created");

    public static readonly Outcome Existing = new("existing");

    public TResult Match<TResult>(Func<TResult> onCreated, Func<TResult> onExisting, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Existing => onExisting(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onExisting, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Existing) onExisting();
        else otherwise(Value);
    }
}
