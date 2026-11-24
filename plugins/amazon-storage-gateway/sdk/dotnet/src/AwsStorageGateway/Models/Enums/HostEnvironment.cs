using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on Snow Family devices.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HostEnvironment>))]
public sealed record HostEnvironment : OpenStringEnum<HostEnvironment>
{
    private HostEnvironment(string value) : base(value)
    {
    }

    public static readonly HostEnvironment Vmware = new("VMWARE");

    public static readonly HostEnvironment HyperV = new("HYPER-V");

    public static readonly HostEnvironment Ec2 = new("EC2");

    public static readonly HostEnvironment Kvm = new("KVM");

    public static readonly HostEnvironment Other = new("OTHER");

    public static readonly HostEnvironment Snowball = new("SNOWBALL");

    public TResult Match<TResult>(Func<TResult> onVmware,
        Func<TResult> onHyperV,
        Func<TResult> onEc2,
        Func<TResult> onKvm,
        Func<TResult> onOther,
        Func<TResult> onSnowball,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vmware => onVmware(),
            _ when this == HyperV => onHyperV(),
            _ when this == Ec2 => onEc2(),
            _ when this == Kvm => onKvm(),
            _ when this == Other => onOther(),
            _ when this == Snowball => onSnowball(),
            _ => otherwise(Value)
        };

    public void Match(Action onVmware,
        Action onHyperV,
        Action onEc2,
        Action onKvm,
        Action onOther,
        Action onSnowball,
        Action<string> otherwise)
    {
        if (this == Vmware) onVmware();
        else if (this == HyperV) onHyperV();
        else if (this == Ec2) onEc2();
        else if (this == Kvm) onKvm();
        else if (this == Other) onOther();
        else if (this == Snowball) onSnowball();
        else otherwise(Value);
    }
}
