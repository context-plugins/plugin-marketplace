using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code NotFound = new("not_found");

    public static readonly Code Forbidden = new("forbidden");

    public static readonly Code InvalidTransition = new("invalid_transition");

    public TResult Match<TResult>(Func<TResult> onNotFound,
        Func<TResult> onForbidden,
        Func<TResult> onInvalidTransition,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotFound => onNotFound(),
            _ when this == Forbidden => onForbidden(),
            _ when this == InvalidTransition => onInvalidTransition(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotFound, Action onForbidden, Action onInvalidTransition, Action<string> otherwise)
    {
        if (this == NotFound) onNotFound();
        else if (this == Forbidden) onForbidden();
        else if (this == InvalidTransition) onInvalidTransition();
        else otherwise(Value);
    }
}
