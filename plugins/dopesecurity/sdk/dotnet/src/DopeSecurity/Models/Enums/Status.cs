using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Healthy = new("healthy");

    public static readonly Status Error = new("error");

    public static readonly Status Dormant = new("dormant");

    public static readonly Status Disabled = new("disabled");

    public TResult Match<TResult>(Func<TResult> onHealthy,
        Func<TResult> onError,
        Func<TResult> onDormant,
        Func<TResult> onDisabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Healthy => onHealthy(),
            _ when this == Error => onError(),
            _ when this == Dormant => onDormant(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onHealthy, Action onError, Action onDormant, Action onDisabled, Action<string> otherwise)
    {
        if (this == Healthy) onHealthy();
        else if (this == Error) onError();
        else if (this == Dormant) onDormant();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
