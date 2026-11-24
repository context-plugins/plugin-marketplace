using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The processing state of your custom medical vocabulary. If the state is READY, you can use the custom vocabulary in a StartMedicalTranscriptionJob request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyState>))]
public sealed record VocabularyState : OpenStringEnum<VocabularyState>
{
    private VocabularyState(string value) : base(value)
    {
    }

    public static readonly VocabularyState Pending = new("PENDING");

    public static readonly VocabularyState Ready = new("READY");

    public static readonly VocabularyState Failed = new("FAILED");

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
