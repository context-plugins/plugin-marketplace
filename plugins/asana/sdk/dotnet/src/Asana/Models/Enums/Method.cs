using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The HTTP method you wish to emulate for the action.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Get = new("get");

    public static readonly Method Post = new("post");

    public static readonly Method Put = new("put");

    public static readonly Method Delete = new("delete");

    public static readonly Method Patch = new("patch");

    public static readonly Method Head = new("head");

    public TResult Match<TResult>(Func<TResult> onGet,
        Func<TResult> onPost,
        Func<TResult> onPut,
        Func<TResult> onDelete,
        Func<TResult> onPatch,
        Func<TResult> onHead,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Get => onGet(),
            _ when this == Post => onPost(),
            _ when this == Put => onPut(),
            _ when this == Delete => onDelete(),
            _ when this == Patch => onPatch(),
            _ when this == Head => onHead(),
            _ => otherwise(Value)
        };

    public void Match(Action onGet,
        Action onPost,
        Action onPut,
        Action onDelete,
        Action onPatch,
        Action onHead,
        Action<string> otherwise)
    {
        if (this == Get) onGet();
        else if (this == Post) onPost();
        else if (this == Put) onPut();
        else if (this == Delete) onDelete();
        else if (this == Patch) onPatch();
        else if (this == Head) onHead();
        else otherwise(Value);
    }
}
