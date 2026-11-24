using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Healthy = new("healthy");

    public static readonly Status Unverified = new("unverified");

    public TResult Match<TResult>(Func<TResult> onHealthy,
        Func<TResult> onUnverified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Healthy => onHealthy(),
            _ when this == Unverified => onUnverified(),
            _ => otherwise(Value)
        };

    public void Match(Action onHealthy, Action onUnverified, Action<string> otherwise)
    {
        if (this == Healthy) onHealthy();
        else if (this == Unverified) onUnverified();
        else otherwise(Value);
    }
}
