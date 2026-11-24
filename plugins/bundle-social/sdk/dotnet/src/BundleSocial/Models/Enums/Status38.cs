using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status38>))]
public sealed record Status38 : OpenStringEnum<Status38>
{
    private Status38(string value) : base(value)
    {
    }

    public static readonly Status38 Open = new("OPEN");

    public static readonly Status38 Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onOpen, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onArchived, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
