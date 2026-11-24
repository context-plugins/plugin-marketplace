using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget58>))]
public sealed record XAmzTarget58 : OpenStringEnum<XAmzTarget58>
{
    private XAmzTarget58(string value) : base(value)
    {
    }

    public static readonly XAmzTarget58 OvertureServiceStartBgpFailoverTest = new(
        "OvertureService.StartBgpFailoverTest");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceStartBgpFailoverTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceStartBgpFailoverTest => onOvertureServiceStartBgpFailoverTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceStartBgpFailoverTest, Action<string> otherwise)
    {
        if (this == OvertureServiceStartBgpFailoverTest) onOvertureServiceStartBgpFailoverTest();
        else otherwise(Value);
    }
}
