using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiProxyType1>))]
public sealed record ApiProxyType1 : OpenStringEnum<ApiProxyType1>
{
    private ApiProxyType1(string value) : base(value)
    {
    }

    public static readonly ApiProxyType1 ApiProxyTypeUnspecified = new("API_PROXY_TYPE_UNSPECIFIED");

    public static readonly ApiProxyType1 Programmable = new("PROGRAMMABLE");

    public static readonly ApiProxyType1 Configurable = new("CONFIGURABLE");

    public TResult Match<TResult>(Func<TResult> onApiProxyTypeUnspecified,
        Func<TResult> onProgrammable,
        Func<TResult> onConfigurable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiProxyTypeUnspecified => onApiProxyTypeUnspecified(),
            _ when this == Programmable => onProgrammable(),
            _ when this == Configurable => onConfigurable(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiProxyTypeUnspecified,
        Action onProgrammable,
        Action onConfigurable,
        Action<string> otherwise)
    {
        if (this == ApiProxyTypeUnspecified) onApiProxyTypeUnspecified();
        else if (this == Programmable) onProgrammable();
        else if (this == Configurable) onConfigurable();
        else otherwise(Value);
    }
}
