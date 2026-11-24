using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateEqualsAmazonTranscribeServiceVocabulariesApi>))]
public sealed record StateEqualsAmazonTranscribeServiceVocabulariesApi : OpenStringEnum<StateEqualsAmazonTranscribeServiceVocabulariesApi>
{
    private StateEqualsAmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly StateEqualsAmazonTranscribeServiceVocabulariesApi Pending = new("PENDING");

    public static readonly StateEqualsAmazonTranscribeServiceVocabulariesApi Ready = new("READY");

    public static readonly StateEqualsAmazonTranscribeServiceVocabulariesApi Failed = new("FAILED");

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
