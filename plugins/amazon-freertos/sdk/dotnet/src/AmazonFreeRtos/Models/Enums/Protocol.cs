using System;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Enum;

namespace AmazonFreeRtos.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Protocol>))]
public sealed record Protocol : OpenStringEnum<Protocol>
{
    private Protocol(string value) : base(value)
    {
    }

    public static readonly Protocol Mqtt = new("MQTT");

    public static readonly Protocol Http = new("HTTP");

    public TResult Match<TResult>(Func<TResult> onMqtt, Func<TResult> onHttp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mqtt => onMqtt(),
            _ when this == Http => onHttp(),
            _ => otherwise(Value)
        };

    public void Match(Action onMqtt, Action onHttp, Action<string> otherwise)
    {
        if (this == Mqtt) onMqtt();
        else if (this == Http) onHttp();
        else otherwise(Value);
    }
}
