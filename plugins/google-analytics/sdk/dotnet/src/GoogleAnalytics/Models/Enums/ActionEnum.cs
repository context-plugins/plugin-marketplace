using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The type of action that changed this resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum ActionTypeUnspecified = new("ACTION_TYPE_UNSPECIFIED");

    public static readonly ActionEnum Created = new("CREATED");

    public static readonly ActionEnum Updated = new("UPDATED");

    public static readonly ActionEnum Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onActionTypeUnspecified,
        Func<TResult> onCreated,
        Func<TResult> onUpdated,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActionTypeUnspecified => onActionTypeUnspecified(),
            _ when this == Created => onCreated(),
            _ when this == Updated => onUpdated(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionTypeUnspecified,
        Action onCreated,
        Action onUpdated,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == ActionTypeUnspecified) onActionTypeUnspecified();
        else if (this == Created) onCreated();
        else if (this == Updated) onUpdated();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
