using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// Prediction system that detects the intent.
/// <list type="bullet">
///   <item><description><c>DIRECT</c>—Utterance search or an exact match</description></item>
///   <item><description><c>CORE_NLP</c>—Third-party Natural Language Processing (NLP)</description></item>
///   <item><description><c>EINSTEIN_NLP</c>—Einstein NLP</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntentSource>))]
public sealed record IntentSource : OpenStringEnum<IntentSource>
{
    private IntentSource(string value) : base(value)
    {
    }

    public static readonly IntentSource Direct = new("DIRECT");

    public static readonly IntentSource CoreNlp = new("CORE_NLP");

    public static readonly IntentSource EinsteinNlp = new("EINSTEIN_NLP");

    public TResult Match<TResult>(Func<TResult> onDirect,
        Func<TResult> onCoreNlp,
        Func<TResult> onEinsteinNlp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Direct => onDirect(),
            _ when this == CoreNlp => onCoreNlp(),
            _ when this == EinsteinNlp => onEinsteinNlp(),
            _ => otherwise(Value)
        };

    public void Match(Action onDirect, Action onCoreNlp, Action onEinsteinNlp, Action<string> otherwise)
    {
        if (this == Direct) onDirect();
        else if (this == CoreNlp) onCoreNlp();
        else if (this == EinsteinNlp) onEinsteinNlp();
        else otherwise(Value);
    }
}
