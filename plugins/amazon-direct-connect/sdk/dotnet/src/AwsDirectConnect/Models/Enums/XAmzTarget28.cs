using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget28>))]
public sealed record XAmzTarget28 : OpenStringEnum<XAmzTarget28>
{
    private XAmzTarget28(string value) : base(value)
    {
    }

    public static readonly XAmzTarget28 OvertureServiceCreateBgpPeer = new("OvertureService.CreateBGPPeer");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateBgpPeer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateBgpPeer => onOvertureServiceCreateBgpPeer(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateBgpPeer, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateBgpPeer) onOvertureServiceCreateBgpPeer();
        else otherwise(Value);
    }
}
