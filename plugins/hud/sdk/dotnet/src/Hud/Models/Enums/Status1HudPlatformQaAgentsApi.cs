using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1HudPlatformQaAgentsApi>))]
public sealed record Status1HudPlatformQaAgentsApi : OpenStringEnum<Status1HudPlatformQaAgentsApi>
{
    private Status1HudPlatformQaAgentsApi(string value) : base(value)
    {
    }

    public static readonly Status1HudPlatformQaAgentsApi Added = new("added");

    public static readonly Status1HudPlatformQaAgentsApi Modified = new("modified");

    public TResult Match<TResult>(Func<TResult> onAdded, Func<TResult> onModified, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Added => onAdded(),
            _ when this == Modified => onModified(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdded, Action onModified, Action<string> otherwise)
    {
        if (this == Added) onAdded();
        else if (this == Modified) onModified();
        else otherwise(Value);
    }
}
