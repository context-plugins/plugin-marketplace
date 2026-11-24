using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OutcomeHudPlatformTasksApi>))]
public sealed record OutcomeHudPlatformTasksApi : OpenStringEnum<OutcomeHudPlatformTasksApi>
{
    private OutcomeHudPlatformTasksApi(string value) : base(value)
    {
    }

    public static readonly OutcomeHudPlatformTasksApi Created = new("created");

    public static readonly OutcomeHudPlatformTasksApi Updated = new("updated");

    public static readonly OutcomeHudPlatformTasksApi Unchanged = new("unchanged");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onUpdated,
        Func<TResult> onUnchanged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Updated => onUpdated(),
            _ when this == Unchanged => onUnchanged(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onUpdated, Action onUnchanged, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Updated) onUpdated();
        else if (this == Unchanged) onUnchanged();
        else otherwise(Value);
    }
}
