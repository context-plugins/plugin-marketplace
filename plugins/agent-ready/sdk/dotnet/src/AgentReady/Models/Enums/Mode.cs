using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode List = new("list");

    public static readonly Mode Summarize = new("summarize");

    public TResult Match<TResult>(Func<TResult> onList, Func<TResult> onSummarize, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ when this == Summarize => onSummarize(),
            _ => otherwise(Value)
        };

    public void Match(Action onList, Action onSummarize, Action<string> otherwise)
    {
        if (this == List) onList();
        else if (this == Summarize) onSummarize();
        else otherwise(Value);
    }
}
