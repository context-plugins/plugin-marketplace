using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ServiceTier>))]
public sealed record ServiceTier : OpenStringEnum<ServiceTier>
{
    private ServiceTier(string value) : base(value)
    {
    }

    public static readonly ServiceTier Auto = new("auto");

    public static readonly ServiceTier Default = new("default");

    public static readonly ServiceTier Flex = new("flex");

    public static readonly ServiceTier Scale = new("scale");

    public static readonly ServiceTier Priority = new("priority");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onDefault,
        Func<TResult> onFlex,
        Func<TResult> onScale,
        Func<TResult> onPriority,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Default => onDefault(),
            _ when this == Flex => onFlex(),
            _ when this == Scale => onScale(),
            _ when this == Priority => onPriority(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto,
        Action onDefault,
        Action onFlex,
        Action onScale,
        Action onPriority,
        Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Default) onDefault();
        else if (this == Flex) onFlex();
        else if (this == Scale) onScale();
        else if (this == Priority) onPriority();
        else otherwise(Value);
    }
}
