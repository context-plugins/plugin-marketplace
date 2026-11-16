using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The acquiring processor. Use <c>DUMMY_V1</c> to use your sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Processor3>))]
public sealed record Processor3 : OpenStringEnum<Processor3>
{
    private Processor3(string value) : base(value)
    {
    }

    public static readonly Processor3 DummyV1 = new("DUMMY_V1");

    public static readonly Processor3 FinixV1 = new("FINIX_V1");

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
