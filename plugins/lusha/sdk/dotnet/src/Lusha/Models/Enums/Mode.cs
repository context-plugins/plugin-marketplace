using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Direct = new("direct");

    public static readonly Mode Kafka = new("kafka");

    public static readonly Mode Full = new("full");

    public TResult Match<TResult>(Func<TResult> onDirect,
        Func<TResult> onKafka,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Direct => onDirect(),
            _ when this == Kafka => onKafka(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onDirect, Action onKafka, Action onFull, Action<string> otherwise)
    {
        if (this == Direct) onDirect();
        else if (this == Kafka) onKafka();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
