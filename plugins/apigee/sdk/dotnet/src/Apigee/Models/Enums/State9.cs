using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State9>))]
public sealed record State9 : OpenStringEnum<State9>
{
    private State9(string value) : base(value)
    {
    }

    public static readonly State9 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State9 Creating = new("CREATING");

    public static readonly State9 Active = new("ACTIVE");

    public static readonly State9 Deleting = new("DELETING");

    public static readonly State9 Updating = new("UPDATING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onDeleting,
        Func<TResult> onUpdating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ when this == Updating => onUpdating(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onDeleting,
        Action onUpdating,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else if (this == Updating) onUpdating();
        else otherwise(Value);
    }
}
