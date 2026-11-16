using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Set the acquiring processor. Use <c>DUMMY_V1</c> or <c>null</c> for your Sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProcessorRequest>))]
public sealed record ProcessorRequest : OpenStringEnum<ProcessorRequest>
{
    private ProcessorRequest(string value) : base(value)
    {
    }

    public static readonly ProcessorRequest DummyV1 = new("DUMMY_V1");

    public static readonly ProcessorRequest FinixV1 = new("FINIX_V1");

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
