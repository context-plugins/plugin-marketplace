using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHudPlatformJobsApi>))]
public sealed record StatusHudPlatformJobsApi : OpenStringEnum<StatusHudPlatformJobsApi>
{
    private StatusHudPlatformJobsApi(string value) : base(value)
    {
    }

    public static readonly StatusHudPlatformJobsApi Completed = new("completed");

    public static readonly StatusHudPlatformJobsApi Error = new("error");

    public TResult Match<TResult>(Func<TResult> onCompleted, Func<TResult> onError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted, Action onError, Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
