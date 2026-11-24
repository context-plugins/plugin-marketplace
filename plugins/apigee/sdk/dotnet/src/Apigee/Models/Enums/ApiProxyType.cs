using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the API proxy.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiProxyType>))]
public sealed record ApiProxyType : OpenStringEnum<ApiProxyType>
{
    private ApiProxyType(string value) : base(value)
    {
    }

    public static readonly ApiProxyType ApiProxyTypeUnspecified = new("API_PROXY_TYPE_UNSPECIFIED");

    public static readonly ApiProxyType Programmable = new("PROGRAMMABLE");

    public static readonly ApiProxyType Configurable = new("CONFIGURABLE");

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
