using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The payment processing entity responsible for handling transactions, fund movements, etc., between different financial accounts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Processor>))]
public sealed record Processor : OpenStringEnum<Processor>
{
    private Processor(string value) : base(value)
    {
    }

    public static readonly Processor DummyV1 = new("DUMMY_V1");

    public static readonly Processor FinixV1 = new("FINIX_V1");

    public TResult Match<TResult>(Func<TResult> onDummyV1, Func<TResult> onFinixV1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DummyV1 => onDummyV1(),
            _ when this == FinixV1 => onFinixV1(),
            _ => otherwise(Value)
        };

    public void Match(Action onDummyV1, Action onFinixV1, Action<string> otherwise)
    {
        if (this == DummyV1) onDummyV1();
        else if (this == FinixV1) onFinixV1();
        else otherwise(Value);
    }
}
