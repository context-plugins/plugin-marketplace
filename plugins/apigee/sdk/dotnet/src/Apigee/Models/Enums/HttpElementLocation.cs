using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The location of the API key. The default value is QUERY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HttpElementLocation>))]
public sealed record HttpElementLocation : OpenStringEnum<HttpElementLocation>
{
    private HttpElementLocation(string value) : base(value)
    {
    }

    public static readonly HttpElementLocation HttpElementLocationUnspecified = new(
        "HTTP_ELEMENT_LOCATION_UNSPECIFIED");

    public static readonly HttpElementLocation Query = new("QUERY");

    public static readonly HttpElementLocation Header = new("HEADER");

    public static readonly HttpElementLocation Path = new("PATH");

    public static readonly HttpElementLocation Body = new("BODY");

    public static readonly HttpElementLocation Cookie = new("COOKIE");

    public TResult Match<TResult>(Func<TResult> onHttpElementLocationUnspecified,
        Func<TResult> onQuery,
        Func<TResult> onHeader,
        Func<TResult> onPath,
        Func<TResult> onBody,
        Func<TResult> onCookie,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HttpElementLocationUnspecified => onHttpElementLocationUnspecified(),
            _ when this == Query => onQuery(),
            _ when this == Header => onHeader(),
            _ when this == Path => onPath(),
            _ when this == Body => onBody(),
            _ when this == Cookie => onCookie(),
            _ => otherwise(Value)
        };

    public void Match(Action onHttpElementLocationUnspecified,
        Action onQuery,
        Action onHeader,
        Action onPath,
        Action onBody,
        Action onCookie,
        Action<string> otherwise)
    {
        if (this == HttpElementLocationUnspecified) onHttpElementLocationUnspecified();
        else if (this == Query) onQuery();
        else if (this == Header) onHeader();
        else if (this == Path) onPath();
        else if (this == Body) onBody();
        else if (this == Cookie) onCookie();
        else otherwise(Value);
    }
}
