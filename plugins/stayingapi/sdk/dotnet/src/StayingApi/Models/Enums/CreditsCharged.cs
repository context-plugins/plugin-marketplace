using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<CreditsCharged>))]
public sealed record CreditsCharged : OpenIntEnum<CreditsCharged>
{
    private CreditsCharged(long value) : base(value)
    {
    }

    public static readonly CreditsCharged Value0 = new(0L);

    public TResult Match<TResult>(Func<TResult> onValue0, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else otherwise(Value);
    }
}
