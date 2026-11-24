using System;
using System.Text.Json.Serialization;
using CloudKit.Core.Enum;

namespace CloudKit.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Database>))]
public sealed record Database : OpenStringEnum<Database>
{
    private Database(string value) : base(value)
    {
    }

    public static readonly Database Public = new("public");

    public static readonly Database Private = new("private");

    public static readonly Database Shared = new("shared");

    public TResult Match<TResult>(Func<TResult> onPublic,
        Func<TResult> onPrivate,
        Func<TResult> onShared,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Private => onPrivate(),
            _ when this == Shared => onShared(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onPrivate, Action onShared, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Private) onPrivate();
        else if (this == Shared) onShared();
        else otherwise(Value);
    }
}
