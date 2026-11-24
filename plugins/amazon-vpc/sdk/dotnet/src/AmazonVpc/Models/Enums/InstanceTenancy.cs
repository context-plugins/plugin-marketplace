using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The allowed tenancy of instances launched into the VPC
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InstanceTenancy>))]
public sealed record InstanceTenancy : OpenStringEnum<InstanceTenancy>
{
    private InstanceTenancy(string value) : base(value)
    {
    }

    public static readonly InstanceTenancy Default = new("default");

    public static readonly InstanceTenancy Dedicated = new("dedicated");

    public static readonly InstanceTenancy Host = new("host");

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
