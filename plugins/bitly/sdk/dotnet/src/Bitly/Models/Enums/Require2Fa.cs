using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// Two-factor authentication requirement for this organization. Possible values: "none", "sms". Omitted when no auth requirements are configured.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Require2Fa>))]
public sealed record Require2Fa : OpenStringEnum<Require2Fa>
{
    private Require2Fa(string value) : base(value)
    {
    }

    public static readonly Require2Fa None = new("none");

    public static readonly Require2Fa Sms = new("sms");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onSms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Sms => onSms(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onSms, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Sms) onSms();
        else otherwise(Value);
    }
}
