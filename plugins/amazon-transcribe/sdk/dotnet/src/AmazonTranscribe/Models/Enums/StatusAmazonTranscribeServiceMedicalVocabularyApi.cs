using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Lists all custom medical vocabularies that have the status specified in your request. Custom vocabularies are ordered by creation date, with the newest vocabulary first.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record StatusAmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<StatusAmazonTranscribeServiceMedicalVocabularyApi>
{
    private StatusAmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonTranscribeServiceMedicalVocabularyApi Pending = new("PENDING");

    public static readonly StatusAmazonTranscribeServiceMedicalVocabularyApi Ready = new("READY");

    public static readonly StatusAmazonTranscribeServiceMedicalVocabularyApi Failed = new("FAILED");

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
