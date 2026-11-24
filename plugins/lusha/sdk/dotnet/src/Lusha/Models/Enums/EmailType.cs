using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// The type of email address (alternative to 'type')
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EmailType>))]
public sealed record EmailType : OpenStringEnum<EmailType>
{
    private EmailType(string value) : base(value)
    {
    }

    public static readonly EmailType Work = new("work");

    public static readonly EmailType Private = new("private");

    public TResult Match<TResult>(Func<TResult> onWork, Func<TResult> onPrivate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Work => onWork(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onWork, Action onPrivate, Action<string> otherwise)
    {
        if (this == Work) onWork();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
