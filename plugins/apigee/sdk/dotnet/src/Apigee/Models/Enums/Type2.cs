using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Type of alias.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 AliasTypeUnspecified = new("ALIAS_TYPE_UNSPECIFIED");

    public static readonly Type2 Cert = new("CERT");

    public static readonly Type2 KeyCert = new("KEY_CERT");

    public TResult Match<TResult>(Func<TResult> onAliasTypeUnspecified,
        Func<TResult> onCert,
        Func<TResult> onKeyCert,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AliasTypeUnspecified => onAliasTypeUnspecified(),
            _ when this == Cert => onCert(),
            _ when this == KeyCert => onKeyCert(),
            _ => otherwise(Value)
        };

    public void Match(Action onAliasTypeUnspecified, Action onCert, Action onKeyCert, Action<string> otherwise)
    {
        if (this == AliasTypeUnspecified) onAliasTypeUnspecified();
        else if (this == Cert) onCert();
        else if (this == KeyCert) onKeyCert();
        else otherwise(Value);
    }
}
