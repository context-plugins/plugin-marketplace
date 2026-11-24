using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Authentication type for the user workload running in containers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserWorkloadAuthenticationType>))]
public sealed record UserWorkloadAuthenticationType : OpenStringEnum<UserWorkloadAuthenticationType>
{
    private UserWorkloadAuthenticationType(string value) : base(value)
    {
    }

    public static readonly UserWorkloadAuthenticationType AuthenticationTypeUnspecified = new(
        "AUTHENTICATION_TYPE_UNSPECIFIED");

    public static readonly UserWorkloadAuthenticationType ServiceAccount = new("SERVICE_ACCOUNT");

    public static readonly UserWorkloadAuthenticationType EndUserCredentials = new("END_USER_CREDENTIALS");

    public TResult Match<TResult>(Func<TResult> onAuthenticationTypeUnspecified,
        Func<TResult> onServiceAccount,
        Func<TResult> onEndUserCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthenticationTypeUnspecified => onAuthenticationTypeUnspecified(),
            _ when this == ServiceAccount => onServiceAccount(),
            _ when this == EndUserCredentials => onEndUserCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthenticationTypeUnspecified,
        Action onServiceAccount,
        Action onEndUserCredentials,
        Action<string> otherwise)
    {
        if (this == AuthenticationTypeUnspecified) onAuthenticationTypeUnspecified();
        else if (this == ServiceAccount) onServiceAccount();
        else if (this == EndUserCredentials) onEndUserCredentials();
        else otherwise(Value);
    }
}
