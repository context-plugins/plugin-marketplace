using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Determines in which language e-mails are sent to the user, if the user has not set their language preference yet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureLanguage>))]
public sealed record SignatureLanguage : OpenStringEnum<SignatureLanguage>
{
    private SignatureLanguage(string value) : base(value)
    {
    }

    public static readonly SignatureLanguage En = new("en");

    public static readonly SignatureLanguage De = new("de");

    public static readonly SignatureLanguage Fr = new("fr");

    public static readonly SignatureLanguage It = new("it");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onDe,
        Func<TResult> onFr,
        Func<TResult> onIt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == De => onDe(),
            _ when this == Fr => onFr(),
            _ when this == It => onIt(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn, Action onDe, Action onFr, Action onIt, Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == De) onDe();
        else if (this == Fr) onFr();
        else if (this == It) onIt();
        else otherwise(Value);
    }
}
