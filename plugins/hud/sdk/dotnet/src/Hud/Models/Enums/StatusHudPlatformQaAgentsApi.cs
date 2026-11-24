using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHudPlatformQaAgentsApi>))]
public sealed record StatusHudPlatformQaAgentsApi : OpenStringEnum<StatusHudPlatformQaAgentsApi>
{
    private StatusHudPlatformQaAgentsApi(string value) : base(value)
    {
    }

    public static readonly StatusHudPlatformQaAgentsApi Added = new("added");

    public static readonly StatusHudPlatformQaAgentsApi Modified = new("modified");

    public static readonly StatusHudPlatformQaAgentsApi Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onAdded,
        Func<TResult> onModified,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Added => onAdded(),
            _ when this == Modified => onModified(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdded, Action onModified, Action onDeleted, Action<string> otherwise)
    {
        if (this == Added) onAdded();
        else if (this == Modified) onModified();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
