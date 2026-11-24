using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the API mode for the test execution is streaming or non-streaming.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiMode1>))]
public sealed record ApiMode1 : OpenStringEnum<ApiMode1>
{
    private ApiMode1(string value) : base(value)
    {
    }

    public static readonly ApiMode1 Streaming = new("Streaming");

    public static readonly ApiMode1 NonStreaming = new("NonStreaming");

    public TResult Match<TResult>(Func<TResult> onStreaming,
        Func<TResult> onNonStreaming,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Streaming => onStreaming(),
            _ when this == NonStreaming => onNonStreaming(),
            _ => otherwise(Value)
        };

    public void Match(Action onStreaming, Action onNonStreaming, Action<string> otherwise)
    {
        if (this == Streaming) onStreaming();
        else if (this == NonStreaming) onNonStreaming();
        else otherwise(Value);
    }
}
