using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode2>))]
public sealed record Mode2 : OpenStringEnum<Mode2>
{
    private Mode2(string value) : base(value)
    {
    }

    public static readonly Mode2 List = new("list");

    public static readonly Mode2 Summarize = new("summarize");

    public static readonly Mode2 Generate = new("generate");

    public TResult Match<TResult>(Func<TResult> onList,
        Func<TResult> onSummarize,
        Func<TResult> onGenerate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ when this == Summarize => onSummarize(),
            _ when this == Generate => onGenerate(),
            _ => otherwise(Value)
        };

    public void Match(Action onList, Action onSummarize, Action onGenerate, Action<string> otherwise)
    {
        if (this == List) onList();
        else if (this == Summarize) onSummarize();
        else if (this == Generate) onGenerate();
        else otherwise(Value);
    }
}
