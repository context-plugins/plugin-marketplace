using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scheme>))]
public sealed record Scheme : OpenStringEnum<Scheme>
{
    private Scheme(string value) : base(value)
    {
    }

    public static readonly Scheme SchemeUnspecified = new("SCHEME_UNSPECIFIED");

    public static readonly Scheme Http = new("HTTP");

    public static readonly Scheme Https = new("HTTPS");

    public TResult Match<TResult>(Func<TResult> onSchemeUnspecified,
        Func<TResult> onHttp,
        Func<TResult> onHttps,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SchemeUnspecified => onSchemeUnspecified(),
            _ when this == Http => onHttp(),
            _ when this == Https => onHttps(),
            _ => otherwise(Value)
        };

    public void Match(Action onSchemeUnspecified, Action onHttp, Action onHttps, Action<string> otherwise)
    {
        if (this == SchemeUnspecified) onSchemeUnspecified();
        else if (this == Http) onHttp();
        else if (this == Https) onHttps();
        else otherwise(Value);
    }
}
