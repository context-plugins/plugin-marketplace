using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Filter the flywheels based on the flywheel status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status10>))]
public sealed record Status10 : OpenStringEnum<Status10>
{
    private Status10(string value) : base(value)
    {
    }

    public static readonly Status10 Creating = new("CREATING");

    public static readonly Status10 Active = new("ACTIVE");

    public static readonly Status10 Updating = new("UPDATING");

    public static readonly Status10 Deleting = new("DELETING");

    public static readonly Status10 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onUpdating,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Updating => onUpdating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onActive,
        Action onUpdating,
        Action onDeleting,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Updating) onUpdating();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
