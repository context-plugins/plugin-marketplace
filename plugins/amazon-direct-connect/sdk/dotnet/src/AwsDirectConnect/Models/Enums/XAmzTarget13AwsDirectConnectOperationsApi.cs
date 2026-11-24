using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget13AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget13AwsDirectConnectOperationsApi>
{
    private XAmzTarget13AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13AwsDirectConnectOperationsApi OvertureServiceListVirtualInterfaceRoutes = new(
        "OvertureService.ListVirtualInterfaceRoutes");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceListVirtualInterfaceRoutes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceListVirtualInterfaceRoutes => onOvertureServiceListVirtualInterfaceRoutes(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceListVirtualInterfaceRoutes, Action<string> otherwise)
    {
        if (this == OvertureServiceListVirtualInterfaceRoutes) onOvertureServiceListVirtualInterfaceRoutes();
        else otherwise(Value);
    }
}
