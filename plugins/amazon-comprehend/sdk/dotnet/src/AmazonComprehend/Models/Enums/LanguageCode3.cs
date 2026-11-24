using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The language of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode3>))]
public sealed record LanguageCode3 : OpenStringEnum<LanguageCode3>
{
    private LanguageCode3(string value) : base(value)
    {
    }

    public static readonly LanguageCode3 En = new("en");

    public static readonly LanguageCode3 Es = new("es");

    public static readonly LanguageCode3 Fr = new("fr");

    public static readonly LanguageCode3 De = new("de");

    public static readonly LanguageCode3 It = new("it");

    public static readonly LanguageCode3 Pt = new("pt");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onEs,
        Func<TResult> onFr,
        Func<TResult> onDe,
        Func<TResult> onIt,
        Func<TResult> onPt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == Es => onEs(),
            _ when this == Fr => onFr(),
            _ when this == De => onDe(),
            _ when this == It => onIt(),
            _ when this == Pt => onPt(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn,
        Action onEs,
        Action onFr,
        Action onDe,
        Action onIt,
        Action onPt,
        Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == Es) onEs();
        else if (this == Fr) onFr();
        else if (this == De) onDe();
        else if (this == It) onIt();
        else if (this == Pt) onPt();
        else otherwise(Value);
    }
}
