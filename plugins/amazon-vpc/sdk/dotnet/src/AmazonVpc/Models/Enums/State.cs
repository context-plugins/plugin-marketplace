using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The current state of the attachment
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Attaching = new("attaching");

    public static readonly State Attached = new("attached");

    public static readonly State Detaching = new("detaching");

    public static readonly State Detached = new("detached");

    public TResult Match<TResult>(Func<TResult> onAttaching,
        Func<TResult> onAttached,
        Func<TResult> onDetaching,
        Func<TResult> onDetached,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attaching => onAttaching(),
            _ when this == Attached => onAttached(),
            _ when this == Detaching => onDetaching(),
            _ when this == Detached => onDetached(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttaching,
        Action onAttached,
        Action onDetaching,
        Action onDetached,
        Action<string> otherwise)
    {
        if (this == Attaching) onAttaching();
        else if (this == Attached) onAttached();
        else if (this == Detaching) onDetaching();
        else if (this == Detached) onDetached();
        else otherwise(Value);
    }
}
