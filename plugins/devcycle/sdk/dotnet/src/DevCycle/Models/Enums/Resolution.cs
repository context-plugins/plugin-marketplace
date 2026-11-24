using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Whether the opt-in status was explicitly set by the user or implicitly defaulted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Resolution>))]
public sealed record Resolution : OpenStringEnum<Resolution>
{
    private Resolution(string value) : base(value)
    {
    }

    public static readonly Resolution Explicit = new("explicit");

    public static readonly Resolution Implicit = new("implicit");

    public TResult Match<TResult>(Func<TResult> onExplicit,
        Func<TResult> onImplicit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Explicit => onExplicit(),
            _ when this == Implicit => onImplicit(),
            _ => otherwise(Value)
        };

    public void Match(Action onExplicit, Action onImplicit, Action<string> otherwise)
    {
        if (this == Explicit) onExplicit();
        else if (this == Implicit) onImplicit();
        else otherwise(Value);
    }
}
