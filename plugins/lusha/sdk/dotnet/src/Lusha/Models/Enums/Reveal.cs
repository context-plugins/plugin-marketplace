using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reveal>))]
public sealed record Reveal : OpenStringEnum<Reveal>
{
    private Reveal(string value) : base(value)
    {
    }

    public static readonly Reveal Emails = new("emails");

    public static readonly Reveal Phones = new("phones");

    public TResult Match<TResult>(Func<TResult> onEmails, Func<TResult> onPhones, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Emails => onEmails(),
            _ when this == Phones => onPhones(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmails, Action onPhones, Action<string> otherwise)
    {
        if (this == Emails) onEmails();
        else if (this == Phones) onPhones();
        else otherwise(Value);
    }
}
