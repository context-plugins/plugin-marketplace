using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. State of the nat address.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State10>))]
public sealed record State10 : OpenStringEnum<State10>
{
    private State10(string value) : base(value)
    {
    }

    public static readonly State10 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State10 Creating = new("CREATING");

    public static readonly State10 Reserved = new("RESERVED");

    public static readonly State10 Active = new("ACTIVE");

    public static readonly State10 Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onReserved,
        Func<TResult> onActive,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Reserved => onReserved(),
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onReserved,
        Action onActive,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Reserved) onReserved();
        else if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
