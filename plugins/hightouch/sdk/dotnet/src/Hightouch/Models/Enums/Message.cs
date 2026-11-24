using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Message>))]
public sealed record Message : OpenStringEnum<Message>
{
    private Message(string value) : base(value)
    {
    }

    public static readonly Message ValidationFailed = new("Validation failed");

    public TResult Match<TResult>(Func<TResult> onValidationFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidationFailed => onValidationFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidationFailed, Action<string> otherwise)
    {
        if (this == ValidationFailed) onValidationFailed();
        else otherwise(Value);
    }
}
