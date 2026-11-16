using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProcessorType>))]
public sealed record ProcessorType : OpenStringEnum<ProcessorType>
{
    private ProcessorType(string value) : base(value)
    {
    }

    public static readonly ProcessorType FinixV1 = new("FINIX_V1");

    public static readonly ProcessorType DummyV1 = new("DUMMY_V1");

    public TResult Match<TResult>(Func<TResult> onFinixV1, Func<TResult> onDummyV1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FinixV1 => onFinixV1(),
            _ when this == DummyV1 => onDummyV1(),
            _ => otherwise(Value)
        };

    public void Match(Action onFinixV1, Action onDummyV1, Action<string> otherwise)
    {
        if (this == FinixV1) onFinixV1();
        else if (this == DummyV1) onDummyV1();
        else otherwise(Value);
    }
}
