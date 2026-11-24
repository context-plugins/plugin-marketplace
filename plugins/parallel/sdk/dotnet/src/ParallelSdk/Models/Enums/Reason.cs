using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason MaxOutputTokens = new("max_output_tokens");

    public static readonly Reason ContentFilter = new("content_filter");

    public TResult Match<TResult>(Func<TResult> onMaxOutputTokens,
        Func<TResult> onContentFilter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MaxOutputTokens => onMaxOutputTokens(),
            _ when this == ContentFilter => onContentFilter(),
            _ => otherwise(Value)
        };

    public void Match(Action onMaxOutputTokens, Action onContentFilter, Action<string> otherwise)
    {
        if (this == MaxOutputTokens) onMaxOutputTokens();
        else if (this == ContentFilter) onContentFilter();
        else otherwise(Value);
    }
}
