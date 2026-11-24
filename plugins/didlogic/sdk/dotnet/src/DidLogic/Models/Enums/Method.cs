using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// HTTP method of the operation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Get = new("GET");

    public static readonly Method Post = new("POST");

    public static readonly Method Put = new("PUT");

    public static readonly Method Patch = new("PATCH");

    public static readonly Method Delete = new("DELETE");

    public TResult Match<TResult>(Func<TResult> onGet,
        Func<TResult> onPost,
        Func<TResult> onPut,
        Func<TResult> onPatch,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Get => onGet(),
            _ when this == Post => onPost(),
            _ when this == Put => onPut(),
            _ when this == Patch => onPatch(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onGet,
        Action onPost,
        Action onPut,
        Action onPatch,
        Action onDelete,
        Action<string> otherwise)
    {
        if (this == Get) onGet();
        else if (this == Post) onPost();
        else if (this == Put) onPut();
        else if (this == Patch) onPatch();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
