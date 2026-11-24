using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SeverityHudPlatformTasksApi>))]
public sealed record SeverityHudPlatformTasksApi : OpenStringEnum<SeverityHudPlatformTasksApi>
{
    private SeverityHudPlatformTasksApi(string value) : base(value)
    {
    }

    public static readonly SeverityHudPlatformTasksApi Error = new("error");

    public static readonly SeverityHudPlatformTasksApi Warning = new("warning");

    public TResult Match<TResult>(Func<TResult> onError, Func<TResult> onWarning, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ when this == Warning => onWarning(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action onWarning, Action<string> otherwise)
    {
        if (this == Error) onError();
        else if (this == Warning) onWarning();
        else otherwise(Value);
    }
}
