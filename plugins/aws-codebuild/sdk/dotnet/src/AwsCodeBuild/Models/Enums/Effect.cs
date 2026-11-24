using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The behavior of the proxy rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Effect>))]
public sealed record Effect : OpenStringEnum<Effect>
{
    private Effect(string value) : base(value)
    {
    }

    public static readonly Effect Allow = new("ALLOW");

    public static readonly Effect Deny = new("DENY");

    public TResult Match<TResult>(Func<TResult> onAllow, Func<TResult> onDeny, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Deny => onDeny(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow, Action onDeny, Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Deny) onDeny();
        else otherwise(Value);
    }
}
