using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget29>))]
public sealed record XAmzTarget29 : OpenStringEnum<XAmzTarget29>
{
    private XAmzTarget29(string value) : base(value)
    {
    }

    public static readonly XAmzTarget29 OvertureServiceDeleteBgpPeer = new("OvertureService.DeleteBGPPeer");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteBgpPeer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteBgpPeer => onOvertureServiceDeleteBgpPeer(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteBgpPeer, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteBgpPeer) onOvertureServiceDeleteBgpPeer();
        else otherwise(Value);
    }
}
