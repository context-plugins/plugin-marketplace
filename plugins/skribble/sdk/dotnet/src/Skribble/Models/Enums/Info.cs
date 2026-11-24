using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Info>))]
public sealed record Info : OpenStringEnum<Info>
{
    private Info(string value) : base(value)
    {
    }

    public static readonly Info Validation = new("validation");

    public static readonly Info Format = new("format");

    public static readonly Info Signer = new("signer");

    public TResult Match<TResult>(Func<TResult> onValidation,
        Func<TResult> onFormat,
        Func<TResult> onSigner,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validation => onValidation(),
            _ when this == Format => onFormat(),
            _ when this == Signer => onSigner(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidation, Action onFormat, Action onSigner, Action<string> otherwise)
    {
        if (this == Validation) onValidation();
        else if (this == Format) onFormat();
        else if (this == Signer) onSigner();
        else otherwise(Value);
    }
}
