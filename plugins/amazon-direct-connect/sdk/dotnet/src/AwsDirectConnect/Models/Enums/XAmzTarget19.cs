using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 OvertureServiceDisassociateConnectionFromLag = new(
        "OvertureService.DisassociateConnectionFromLag");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDisassociateConnectionFromLag,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDisassociateConnectionFromLag => onOvertureServiceDisassociateConnectionFromLag(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDisassociateConnectionFromLag, Action<string> otherwise)
    {
        if (this == OvertureServiceDisassociateConnectionFromLag) onOvertureServiceDisassociateConnectionFromLag();
        else otherwise(Value);
    }
}
