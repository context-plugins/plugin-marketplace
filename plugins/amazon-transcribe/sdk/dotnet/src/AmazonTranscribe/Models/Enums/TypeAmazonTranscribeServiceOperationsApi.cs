using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonTranscribeServiceOperationsApi>))]
public sealed record TypeAmazonTranscribeServiceOperationsApi : OpenStringEnum<TypeAmazonTranscribeServiceOperationsApi>
{
    private TypeAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonTranscribeServiceOperationsApi Pronunciation = new("pronunciation");

    public static readonly TypeAmazonTranscribeServiceOperationsApi Punctuation = new("punctuation");

    public TResult Match<TResult>(Func<TResult> onPronunciation,
        Func<TResult> onPunctuation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pronunciation => onPronunciation(),
            _ when this == Punctuation => onPunctuation(),
            _ => otherwise(Value)
        };

    public void Match(Action onPronunciation, Action onPunctuation, Action<string> otherwise)
    {
        if (this == Pronunciation) onPronunciation();
        else if (this == Punctuation) onPunctuation();
        else otherwise(Value);
    }
}
