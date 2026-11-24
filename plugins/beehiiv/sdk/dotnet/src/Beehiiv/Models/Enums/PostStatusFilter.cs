using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostStatusFilter>))]
public sealed record PostStatusFilter : OpenStringEnum<PostStatusFilter>
{
    private PostStatusFilter(string value) : base(value)
    {
    }

    public static readonly PostStatusFilter Draft = new("draft");

    public static readonly PostStatusFilter Confirmed = new("confirmed");

    public static readonly PostStatusFilter Archived = new("archived");

    public static readonly PostStatusFilter All = new("all");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onConfirmed,
        Func<TResult> onArchived,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Confirmed => onConfirmed(),
            _ when this == Archived => onArchived(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onConfirmed, Action onArchived, Action onAll, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Confirmed) onConfirmed();
        else if (this == Archived) onArchived();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
