using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FinishReason>))]
public sealed record FinishReason : OpenStringEnum<FinishReason>
{
    private FinishReason(string value) : base(value)
    {
    }

    public static readonly FinishReason Stop = new("stop");

    public static readonly FinishReason Length = new("length");

    public static readonly FinishReason ToolCalls = new("tool_calls");

    public static readonly FinishReason ContentFilter = new("content_filter");

    public static readonly FinishReason FunctionCall = new("function_call");

    public TResult Match<TResult>(Func<TResult> onStop,
        Func<TResult> onLength,
        Func<TResult> onToolCalls,
        Func<TResult> onContentFilter,
        Func<TResult> onFunctionCall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stop => onStop(),
            _ when this == Length => onLength(),
            _ when this == ToolCalls => onToolCalls(),
            _ when this == ContentFilter => onContentFilter(),
            _ when this == FunctionCall => onFunctionCall(),
            _ => otherwise(Value)
        };

    public void Match(Action onStop,
        Action onLength,
        Action onToolCalls,
        Action onContentFilter,
        Action onFunctionCall,
        Action<string> otherwise)
    {
        if (this == Stop) onStop();
        else if (this == Length) onLength();
        else if (this == ToolCalls) onToolCalls();
        else if (this == ContentFilter) onContentFilter();
        else if (this == FunctionCall) onFunctionCall();
        else otherwise(Value);
    }
}
