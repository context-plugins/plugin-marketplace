using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultAction>))]
public sealed record DefaultAction : OpenStringEnum<DefaultAction>
{
    private DefaultAction(string value) : base(value)
    {
    }

    public static readonly DefaultAction Allow = new("ALLOW");

    public static readonly DefaultAction Deny = new("DENY");

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
