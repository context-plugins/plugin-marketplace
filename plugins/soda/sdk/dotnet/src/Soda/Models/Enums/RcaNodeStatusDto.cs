using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaNodeStatusDto>))]
public sealed record RcaNodeStatusDto : OpenStringEnum<RcaNodeStatusDto>
{
    private RcaNodeStatusDto(string value) : base(value)
    {
    }

    public static readonly RcaNodeStatusDto RootCause = new("rootCause");

    public static readonly RcaNodeStatusDto Affected = new("affected");

    public static readonly RcaNodeStatusDto Healthy = new("healthy");

    public TResult Match<TResult>(Func<TResult> onRootCause,
        Func<TResult> onAffected,
        Func<TResult> onHealthy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RootCause => onRootCause(),
            _ when this == Affected => onAffected(),
            _ when this == Healthy => onHealthy(),
            _ => otherwise(Value)
        };

    public void Match(Action onRootCause, Action onAffected, Action onHealthy, Action<string> otherwise)
    {
        if (this == RootCause) onRootCause();
        else if (this == Affected) onAffected();
        else if (this == Healthy) onHealthy();
        else otherwise(Value);
    }
}
