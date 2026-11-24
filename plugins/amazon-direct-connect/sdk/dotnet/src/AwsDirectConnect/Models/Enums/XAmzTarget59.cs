using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget59>))]
public sealed record XAmzTarget59 : OpenStringEnum<XAmzTarget59>
{
    private XAmzTarget59(string value) : base(value)
    {
    }

    public static readonly XAmzTarget59 OvertureServiceStopBgpFailoverTest = new("OvertureService.StopBgpFailoverTest");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceStopBgpFailoverTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceStopBgpFailoverTest => onOvertureServiceStopBgpFailoverTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceStopBgpFailoverTest, Action<string> otherwise)
    {
        if (this == OvertureServiceStopBgpFailoverTest) onOvertureServiceStopBgpFailoverTest();
        else otherwise(Value);
    }
}
