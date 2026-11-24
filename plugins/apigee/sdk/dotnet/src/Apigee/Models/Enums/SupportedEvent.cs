using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SupportedEvent>))]
public sealed record SupportedEvent : OpenStringEnum<SupportedEvent>
{
    private SupportedEvent(string value) : base(value)
    {
    }

    public static readonly SupportedEvent SupportedEventUnspecified = new("SUPPORTED_EVENT_UNSPECIFIED");

    public static readonly SupportedEvent RequestHeaders = new("REQUEST_HEADERS");

    public static readonly SupportedEvent RequestBody = new("REQUEST_BODY");

    public static readonly SupportedEvent ResponseHeaders = new("RESPONSE_HEADERS");

    public static readonly SupportedEvent ResponseBody = new("RESPONSE_BODY");

    public static readonly SupportedEvent RequestTrailers = new("REQUEST_TRAILERS");

    public static readonly SupportedEvent ResponseTrailers = new("RESPONSE_TRAILERS");

    public TResult Match<TResult>(Func<TResult> onSupportedEventUnspecified,
        Func<TResult> onRequestHeaders,
        Func<TResult> onRequestBody,
        Func<TResult> onResponseHeaders,
        Func<TResult> onResponseBody,
        Func<TResult> onRequestTrailers,
        Func<TResult> onResponseTrailers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SupportedEventUnspecified => onSupportedEventUnspecified(),
            _ when this == RequestHeaders => onRequestHeaders(),
            _ when this == RequestBody => onRequestBody(),
            _ when this == ResponseHeaders => onResponseHeaders(),
            _ when this == ResponseBody => onResponseBody(),
            _ when this == RequestTrailers => onRequestTrailers(),
            _ when this == ResponseTrailers => onResponseTrailers(),
            _ => otherwise(Value)
        };

    public void Match(Action onSupportedEventUnspecified,
        Action onRequestHeaders,
        Action onRequestBody,
        Action onResponseHeaders,
        Action onResponseBody,
        Action onRequestTrailers,
        Action onResponseTrailers,
        Action<string> otherwise)
    {
        if (this == SupportedEventUnspecified) onSupportedEventUnspecified();
        else if (this == RequestHeaders) onRequestHeaders();
        else if (this == RequestBody) onRequestBody();
        else if (this == ResponseHeaders) onResponseHeaders();
        else if (this == ResponseBody) onResponseBody();
        else if (this == RequestTrailers) onRequestTrailers();
        else if (this == ResponseTrailers) onResponseTrailers();
        else otherwise(Value);
    }
}
