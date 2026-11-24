using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at execution time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HttpMethod2>))]
public sealed record HttpMethod2 : OpenStringEnum<HttpMethod2>
{
    private HttpMethod2(string value) : base(value)
    {
    }

    public static readonly HttpMethod2 HttpMethodUnspecified = new("HTTP_METHOD_UNSPECIFIED");

    public static readonly HttpMethod2 Post = new("POST");

    public static readonly HttpMethod2 Get = new("GET");

    public static readonly HttpMethod2 Head = new("HEAD");

    public static readonly HttpMethod2 Put = new("PUT");

    public static readonly HttpMethod2 Delete = new("DELETE");

    public static readonly HttpMethod2 Patch = new("PATCH");

    public static readonly HttpMethod2 Options = new("OPTIONS");

    public TResult Match<TResult>(Func<TResult> onHttpMethodUnspecified,
        Func<TResult> onPost,
        Func<TResult> onGet,
        Func<TResult> onHead,
        Func<TResult> onPut,
        Func<TResult> onDelete,
        Func<TResult> onPatch,
        Func<TResult> onOptions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HttpMethodUnspecified => onHttpMethodUnspecified(),
            _ when this == Post => onPost(),
            _ when this == Get => onGet(),
            _ when this == Head => onHead(),
            _ when this == Put => onPut(),
            _ when this == Delete => onDelete(),
            _ when this == Patch => onPatch(),
            _ when this == Options => onOptions(),
            _ => otherwise(Value)
        };

    public void Match(Action onHttpMethodUnspecified,
        Action onPost,
        Action onGet,
        Action onHead,
        Action onPut,
        Action onDelete,
        Action onPatch,
        Action onOptions,
        Action<string> otherwise)
    {
        if (this == HttpMethodUnspecified) onHttpMethodUnspecified();
        else if (this == Post) onPost();
        else if (this == Get) onGet();
        else if (this == Head) onHead();
        else if (this == Put) onPut();
        else if (this == Delete) onDelete();
        else if (this == Patch) onPatch();
        else if (this == Options) onOptions();
        else otherwise(Value);
    }
}
