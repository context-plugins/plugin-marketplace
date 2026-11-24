using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope Registrant = new("registrant");

    public static readonly Scope Event = new("event");

    public TResult Match<TResult>(Func<TResult> onRegistrant, Func<TResult> onEvent, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Registrant => onRegistrant(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onRegistrant, Action onEvent, Action<string> otherwise)
    {
        if (this == Registrant) onRegistrant();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
