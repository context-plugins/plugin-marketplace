using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialAutomationApi>))]
public sealed record StatusBundleSocialAutomationApi : OpenStringEnum<StatusBundleSocialAutomationApi>
{
    private StatusBundleSocialAutomationApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialAutomationApi Draft = new("DRAFT");

    public static readonly StatusBundleSocialAutomationApi Active = new("ACTIVE");

    public static readonly StatusBundleSocialAutomationApi Paused = new("PAUSED");

    public static readonly StatusBundleSocialAutomationApi Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onPaused, Action onArchived, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
