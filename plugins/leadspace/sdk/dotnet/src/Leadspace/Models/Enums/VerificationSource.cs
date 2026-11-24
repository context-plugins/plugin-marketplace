using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<VerificationSource>))]
public sealed record VerificationSource : OpenStringEnum<VerificationSource>
{
    private VerificationSource(string value) : base(value)
    {
    }

    public static readonly VerificationSource Social = new("Social");

    public static readonly VerificationSource Email = new("Email");

    public static readonly VerificationSource SocialEmail = new("Social & Email");

    public TResult Match<TResult>(Func<TResult> onSocial,
        Func<TResult> onEmail,
        Func<TResult> onSocialEmail,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Social => onSocial(),
            _ when this == Email => onEmail(),
            _ when this == SocialEmail => onSocialEmail(),
            _ => otherwise(Value)
        };

    public void Match(Action onSocial, Action onEmail, Action onSocialEmail, Action<string> otherwise)
    {
        if (this == Social) onSocial();
        else if (this == Email) onEmail();
        else if (this == SocialEmail) onSocialEmail();
        else otherwise(Value);
    }
}
