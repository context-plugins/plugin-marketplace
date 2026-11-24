using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Priority>))]
public sealed record Priority : OpenStringEnum<Priority>
{
    private Priority(string value) : base(value)
    {
    }

    public static readonly Priority Trivial = new("trivial");

    public static readonly Priority Minor = new("minor");

    public static readonly Priority Major = new("major");

    public static readonly Priority Critical = new("critical");

    public static readonly Priority Blocker = new("blocker");

    public TResult Match<TResult>(Func<TResult> onTrivial,
        Func<TResult> onMinor,
        Func<TResult> onMajor,
        Func<TResult> onCritical,
        Func<TResult> onBlocker,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trivial => onTrivial(),
            _ when this == Minor => onMinor(),
            _ when this == Major => onMajor(),
            _ when this == Critical => onCritical(),
            _ when this == Blocker => onBlocker(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrivial,
        Action onMinor,
        Action onMajor,
        Action onCritical,
        Action onBlocker,
        Action<string> otherwise)
    {
        if (this == Trivial) onTrivial();
        else if (this == Minor) onMinor();
        else if (this == Major) onMajor();
        else if (this == Critical) onCritical();
        else if (this == Blocker) onBlocker();
        else otherwise(Value);
    }
}
