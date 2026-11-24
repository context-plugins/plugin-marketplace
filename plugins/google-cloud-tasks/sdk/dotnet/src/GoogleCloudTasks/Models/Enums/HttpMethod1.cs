using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// The HTTP method to use for the request. The default is POST. The app's request handler for the task's target URL must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405 (Method Not Allowed). See <see href="https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler">Writing a push task request handler</see> and the App Engine documentation for your runtime on <see href="https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled">How Requests are Handled</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HttpMethod1>))]
public sealed record HttpMethod1 : OpenStringEnum<HttpMethod1>
{
    private HttpMethod1(string value) : base(value)
    {
    }

    public static readonly HttpMethod1 HttpMethodUnspecified = new("HTTP_METHOD_UNSPECIFIED");

    public static readonly HttpMethod1 Post = new("POST");

    public static readonly HttpMethod1 Get = new("GET");

    public static readonly HttpMethod1 Head = new("HEAD");

    public static readonly HttpMethod1 Put = new("PUT");

    public static readonly HttpMethod1 Delete = new("DELETE");

    public static readonly HttpMethod1 Patch = new("PATCH");

    public static readonly HttpMethod1 Options = new("OPTIONS");

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
