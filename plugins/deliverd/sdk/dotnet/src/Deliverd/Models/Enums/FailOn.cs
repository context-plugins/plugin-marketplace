using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What counts as failing, for CI: rejected_allowed (default), loosened, changed or never
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FailOn>))]
public sealed record FailOn : OpenStringEnum<FailOn>
{
    private FailOn(string value) : base(value)
    {
    }

    public static readonly FailOn Never = new("never");

    public static readonly FailOn RejectedAllowed = new("rejected_allowed");

    public static readonly FailOn Loosened = new("loosened");

    public static readonly FailOn Changed = new("changed");

    public TResult Match<TResult>(Func<TResult> onNever,
        Func<TResult> onRejectedAllowed,
        Func<TResult> onLoosened,
        Func<TResult> onChanged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Never => onNever(),
            _ when this == RejectedAllowed => onRejectedAllowed(),
            _ when this == Loosened => onLoosened(),
            _ when this == Changed => onChanged(),
            _ => otherwise(Value)
        };

    public void Match(Action onNever,
        Action onRejectedAllowed,
        Action onLoosened,
        Action onChanged,
        Action<string> otherwise)
    {
        if (this == Never) onNever();
        else if (this == RejectedAllowed) onRejectedAllowed();
        else if (this == Loosened) onLoosened();
        else if (this == Changed) onChanged();
        else otherwise(Value);
    }
}
