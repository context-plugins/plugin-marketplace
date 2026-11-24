using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a StartTranscriptionJob request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyState2>))]
public sealed record VocabularyState2 : OpenStringEnum<VocabularyState2>
{
    private VocabularyState2(string value) : base(value)
    {
    }

    public static readonly VocabularyState2 Pending = new("PENDING");

    public static readonly VocabularyState2 Ready = new("READY");

    public static readonly VocabularyState2 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onReady,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Ready => onReady(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onReady, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Ready) onReady();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
