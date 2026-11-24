using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget57>))]
public sealed record XAmzTarget57 : OpenStringEnum<XAmzTarget57>
{
    private XAmzTarget57(string value) : base(value)
    {
    }

    public static readonly XAmzTarget57 OvertureServiceListVirtualInterfaceTestHistory = new(
        "OvertureService.ListVirtualInterfaceTestHistory");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceListVirtualInterfaceTestHistory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceListVirtualInterfaceTestHistory => onOvertureServiceListVirtualInterfaceTestHistory(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceListVirtualInterfaceTestHistory, Action<string> otherwise)
    {
        if (this == OvertureServiceListVirtualInterfaceTestHistory) onOvertureServiceListVirtualInterfaceTestHistory();
        else otherwise(Value);
    }
}
