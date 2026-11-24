using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Operation method Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method MethodUnspecified = new("METHOD_UNSPECIFIED");

    public static readonly Method Get = new("GET");

    public static readonly Method Put = new("PUT");

    public static readonly Method Post = new("POST");

    public static readonly Method Delete = new("DELETE");

    public static readonly Method Options = new("OPTIONS");

    public static readonly Method Head = new("HEAD");

    public static readonly Method Patch = new("PATCH");

    public static readonly Method Trace = new("TRACE");

    public TResult Match<TResult>(Func<TResult> onMethodUnspecified,
        Func<TResult> onGet,
        Func<TResult> onPut,
        Func<TResult> onPost,
        Func<TResult> onDelete,
        Func<TResult> onOptions,
        Func<TResult> onHead,
        Func<TResult> onPatch,
        Func<TResult> onTrace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MethodUnspecified => onMethodUnspecified(),
            _ when this == Get => onGet(),
            _ when this == Put => onPut(),
            _ when this == Post => onPost(),
            _ when this == Delete => onDelete(),
            _ when this == Options => onOptions(),
            _ when this == Head => onHead(),
            _ when this == Patch => onPatch(),
            _ when this == Trace => onTrace(),
            _ => otherwise(Value)
        };

    public void Match(Action onMethodUnspecified,
        Action onGet,
        Action onPut,
        Action onPost,
        Action onDelete,
        Action onOptions,
        Action onHead,
        Action onPatch,
        Action onTrace,
        Action<string> otherwise)
    {
        if (this == MethodUnspecified) onMethodUnspecified();
        else if (this == Get) onGet();
        else if (this == Put) onPut();
        else if (this == Post) onPost();
        else if (this == Delete) onDelete();
        else if (this == Options) onOptions();
        else if (this == Head) onHead();
        else if (this == Patch) onPatch();
        else if (this == Trace) onTrace();
        else otherwise(Value);
    }
}
