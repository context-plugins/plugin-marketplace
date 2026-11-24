using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Action1>))]
public sealed record Action1 : OpenStringEnum<Action1>
{
    private Action1(string value) : base(value)
    {
    }

    public static readonly Action1 ActionTypeUnspecified = new("ACTION_TYPE_UNSPECIFIED");

    public static readonly Action1 Created = new("CREATED");

    public static readonly Action1 Updated = new("UPDATED");

    public static readonly Action1 Deleted = new("DELETED");

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
