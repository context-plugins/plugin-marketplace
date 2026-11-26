using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<MaxAgeSeconds>))]
public sealed record MaxAgeSeconds : OpenIntEnum<MaxAgeSeconds>
{
    private MaxAgeSeconds(long value) : base(value)
    {
    }

    public static readonly MaxAgeSeconds Value300 = new(300L);

    public TResult Match<TResult>(Func<TResult> onValue300, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value300 => onValue300(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue300, Action<long> otherwise)
    {
        if (this == Value300) onValue300();
        else otherwise(Value);
    }
}
