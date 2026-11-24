using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Type of this resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 ResourceTypeUnspecified = new("RESOURCE_TYPE_UNSPECIFIED");

    public static readonly Type1 ApiProxy = new("API_PROXY");

    public static readonly Type1 ApiHubDeployment = new("API_HUB_DEPLOYMENT");

    public TResult Match<TResult>(Func<TResult> onResourceTypeUnspecified,
        Func<TResult> onApiProxy,
        Func<TResult> onApiHubDeployment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ResourceTypeUnspecified => onResourceTypeUnspecified(),
            _ when this == ApiProxy => onApiProxy(),
            _ when this == ApiHubDeployment => onApiHubDeployment(),
            _ => otherwise(Value)
        };

    public void Match(Action onResourceTypeUnspecified,
        Action onApiProxy,
        Action onApiHubDeployment,
        Action<string> otherwise)
    {
        if (this == ResourceTypeUnspecified) onResourceTypeUnspecified();
        else if (this == ApiProxy) onApiProxy();
        else if (this == ApiHubDeployment) onApiHubDeployment();
        else otherwise(Value);
    }
}
