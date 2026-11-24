using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialConversationApi>))]
public sealed record StatusBundleSocialConversationApi : OpenStringEnum<StatusBundleSocialConversationApi>
{
    private StatusBundleSocialConversationApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialConversationApi Open = new("OPEN");

    public static readonly StatusBundleSocialConversationApi Archived = new("ARCHIVED");

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
