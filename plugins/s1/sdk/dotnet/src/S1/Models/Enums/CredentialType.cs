using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CredentialType>))]
public sealed record CredentialType : OpenStringEnum<CredentialType>
{
    private CredentialType(string value) : base(value)
    {
    }

    public static readonly CredentialType ApiKey = new("api_key");

    public static readonly CredentialType Oauth = new("oauth");

    public TResult Match<TResult>(Func<TResult> onApiKey, Func<TResult> onOauth, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiKey => onApiKey(),
            _ when this == Oauth => onOauth(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiKey, Action onOauth, Action<string> otherwise)
    {
        if (this == ApiKey) onApiKey();
        else if (this == Oauth) onOauth();
        else otherwise(Value);
    }
}
