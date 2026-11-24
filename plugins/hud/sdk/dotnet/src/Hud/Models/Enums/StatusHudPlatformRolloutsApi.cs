using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHudPlatformRolloutsApi>))]
public sealed record StatusHudPlatformRolloutsApi : OpenStringEnum<StatusHudPlatformRolloutsApi>
{
    private StatusHudPlatformRolloutsApi(string value) : base(value)
    {
    }

    public static readonly StatusHudPlatformRolloutsApi Accepted = new("accepted");

    public static readonly StatusHudPlatformRolloutsApi Noop = new("noop");

    public TResult Match<TResult>(Func<TResult> onAccepted, Func<TResult> onNoop, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == Noop => onNoop(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted, Action onNoop, Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == Noop) onNoop();
        else otherwise(Value);
    }
}
