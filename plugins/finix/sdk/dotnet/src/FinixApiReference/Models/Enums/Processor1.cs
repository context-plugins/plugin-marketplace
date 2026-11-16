using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Name of the transaction processor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Processor1>))]
public sealed record Processor1 : OpenStringEnum<Processor1>
{
    private Processor1(string value) : base(value)
    {
    }

    public static readonly Processor1 FinixV1 = new("FINIX_V1");

    public static readonly Processor1 DummyV1 = new("DUMMY_V1");

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
