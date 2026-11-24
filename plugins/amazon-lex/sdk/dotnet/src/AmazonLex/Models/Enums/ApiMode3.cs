using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiMode3>))]
public sealed record ApiMode3 : OpenStringEnum<ApiMode3>
{
    private ApiMode3(string value) : base(value)
    {
    }

    public static readonly ApiMode3 Streaming = new("Streaming");

    public static readonly ApiMode3 NonStreaming = new("NonStreaming");

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
