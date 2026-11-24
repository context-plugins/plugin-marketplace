using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InstanceTenancy1>))]
public sealed record InstanceTenancy1 : OpenStringEnum<InstanceTenancy1>
{
    private InstanceTenancy1(string value) : base(value)
    {
    }

    public static readonly InstanceTenancy1 Default = new("default");

    public static readonly InstanceTenancy1 Dedicated = new("dedicated");

    public static readonly InstanceTenancy1 Host = new("host");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onDedicated,
        Func<TResult> onHost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == Dedicated => onDedicated(),
            _ when this == Host => onHost(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault, Action onDedicated, Action onHost, Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == Dedicated) onDedicated();
        else if (this == Host) onHost();
        else otherwise(Value);
    }
}
