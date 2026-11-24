using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DedicationType>))]
public sealed record DedicationType : OpenStringEnum<DedicationType>
{
    private DedicationType(string value) : base(value)
    {
    }

    public static readonly DedicationType InMemoryOf = new("in_memory_of");

    public static readonly DedicationType InHonorOf = new("in_honor_of");

    public TResult Match<TResult>(Func<TResult> onInMemoryOf,
        Func<TResult> onInHonorOf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InMemoryOf => onInMemoryOf(),
            _ when this == InHonorOf => onInHonorOf(),
            _ => otherwise(Value)
        };

    public void Match(Action onInMemoryOf, Action onInHonorOf, Action<string> otherwise)
    {
        if (this == InMemoryOf) onInMemoryOf();
        else if (this == InHonorOf) onInHonorOf();
        else otherwise(Value);
    }
}
