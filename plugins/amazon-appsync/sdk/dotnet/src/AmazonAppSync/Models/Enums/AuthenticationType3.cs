using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The new authentication type for the GraphqlApi object.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthenticationType3>))]
public sealed record AuthenticationType3 : OpenStringEnum<AuthenticationType3>
{
    private AuthenticationType3(string value) : base(value)
    {
    }

    public static readonly AuthenticationType3 ApiKey = new("API_KEY");

    public static readonly AuthenticationType3 AwsIam = new("AWS_IAM");

    public static readonly AuthenticationType3 AmazonCognitoUserPools = new("AMAZON_COGNITO_USER_POOLS");

    public static readonly AuthenticationType3 OpenidConnect = new("OPENID_CONNECT");

    public static readonly AuthenticationType3 AwsLambda = new("AWS_LAMBDA");

    public TResult Match<TResult>(Func<TResult> onApiKey,
        Func<TResult> onAwsIam,
        Func<TResult> onAmazonCognitoUserPools,
        Func<TResult> onOpenidConnect,
        Func<TResult> onAwsLambda,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiKey => onApiKey(),
            _ when this == AwsIam => onAwsIam(),
            _ when this == AmazonCognitoUserPools => onAmazonCognitoUserPools(),
            _ when this == OpenidConnect => onOpenidConnect(),
            _ when this == AwsLambda => onAwsLambda(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiKey,
        Action onAwsIam,
        Action onAmazonCognitoUserPools,
        Action onOpenidConnect,
        Action onAwsLambda,
        Action<string> otherwise)
    {
        if (this == ApiKey) onApiKey();
        else if (this == AwsIam) onAwsIam();
        else if (this == AmazonCognitoUserPools) onAmazonCognitoUserPools();
        else if (this == OpenidConnect) onOpenidConnect();
        else if (this == AwsLambda) onAwsLambda();
        else otherwise(Value);
    }
}
