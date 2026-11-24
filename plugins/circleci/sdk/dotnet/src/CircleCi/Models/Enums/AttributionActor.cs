using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// Who to attribute pipeline triggers to
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributionActor>))]
public sealed record AttributionActor : OpenStringEnum<AttributionActor>
{
    private AttributionActor(string value) : base(value)
    {
    }

    public static readonly AttributionActor Current = new("current");

    public static readonly AttributionActor System = new("system");

    public TResult Match<TResult>(Func<TResult> onCurrent, Func<TResult> onSystem, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Current => onCurrent(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrent, Action onSystem, Action<string> otherwise)
    {
        if (this == Current) onCurrent();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
