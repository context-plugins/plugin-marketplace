using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the void attempt for the <c>Authorization</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VoidState>))]
public sealed record VoidState : OpenStringEnum<VoidState>
{
    private VoidState(string value) : base(value)
    {
    }

    public static readonly VoidState Unattempted = new("UNATTEMPTED");

    public static readonly VoidState Pending = new("PENDING");

    public static readonly VoidState Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onUnattempted,
        Func<TResult> onPending,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unattempted => onUnattempted(),
            _ when this == Pending => onPending(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnattempted, Action onPending, Action onSucceeded, Action<string> otherwise)
    {
        if (this == Unattempted) onUnattempted();
        else if (this == Pending) onPending();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
