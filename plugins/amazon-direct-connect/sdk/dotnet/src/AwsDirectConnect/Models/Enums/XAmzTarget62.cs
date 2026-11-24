using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget62>))]
public sealed record XAmzTarget62 : OpenStringEnum<XAmzTarget62>
{
    private XAmzTarget62(string value) : base(value)
    {
    }

    public static readonly XAmzTarget62 OvertureServiceUpdateVirtualInterfaceAttributes = new(
        "OvertureService.UpdateVirtualInterfaceAttributes");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateVirtualInterfaceAttributes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceUpdateVirtualInterfaceAttributes => onOvertureServiceUpdateVirtualInterfaceAttributes(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateVirtualInterfaceAttributes, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceUpdateVirtualInterfaceAttributes) onOvertureServiceUpdateVirtualInterfaceAttributes();
        else otherwise(Value);
    }
}
