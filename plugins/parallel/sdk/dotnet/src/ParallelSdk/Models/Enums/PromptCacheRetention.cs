using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PromptCacheRetention>))]
public sealed record PromptCacheRetention : OpenStringEnum<PromptCacheRetention>
{
    private PromptCacheRetention(string value) : base(value)
    {
    }

    public static readonly PromptCacheRetention InMemory = new("in_memory");

    public static readonly PromptCacheRetention _24H = new("24h");

    public TResult Match<TResult>(Func<TResult> onInMemory, Func<TResult> on_24H, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InMemory => onInMemory(),
            _ when this == _24H => on_24H(),
            _ => otherwise(Value)
        };

    public void Match(Action onInMemory, Action on_24H, Action<string> otherwise)
    {
        if (this == InMemory) onInMemory();
        else if (this == _24H) on_24H();
        else otherwise(Value);
    }
}
