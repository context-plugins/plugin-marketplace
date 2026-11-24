using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Archive = new("ARCHIVE");

    public static readonly ActionEnum Open = new("OPEN");

    public TResult Match<TResult>(Func<TResult> onArchive, Func<TResult> onOpen, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Archive => onArchive(),
            _ when this == Open => onOpen(),
            _ => otherwise(Value)
        };

    public void Match(Action onArchive, Action onOpen, Action<string> otherwise)
    {
        if (this == Archive) onArchive();
        else if (this == Open) onOpen();
        else otherwise(Value);
    }
}
