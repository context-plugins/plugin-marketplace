using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHudPlatformTasksApi>))]
public sealed record StatusHudPlatformTasksApi : OpenStringEnum<StatusHudPlatformTasksApi>
{
    private StatusHudPlatformTasksApi(string value) : base(value)
    {
    }

    public static readonly StatusHudPlatformTasksApi Staged = new("staged");

    public static readonly StatusHudPlatformTasksApi Archived = new("archived");

    public static readonly StatusHudPlatformTasksApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onStaged,
        Func<TResult> onArchived,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Staged => onStaged(),
            _ when this == Archived => onArchived(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStaged, Action onArchived, Action onFailed, Action<string> otherwise)
    {
        if (this == Staged) onStaged();
        else if (this == Archived) onArchived();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
