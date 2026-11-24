using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OriginalEmailVerificationStatus>))]
public sealed record OriginalEmailVerificationStatus : OpenStringEnum<OriginalEmailVerificationStatus>
{
    private OriginalEmailVerificationStatus(string value) : base(value)
    {
    }

    public static readonly OriginalEmailVerificationStatus Valid = new("VALID");

    public static readonly OriginalEmailVerificationStatus Invalid = new("INVALID");

    public static readonly OriginalEmailVerificationStatus Unknown = new("UNKNOWN");

    public static readonly OriginalEmailVerificationStatus CatchAll = new("CATCH-ALL");

    public TResult Match<TResult>(Func<TResult> onValid,
        Func<TResult> onInvalid,
        Func<TResult> onUnknown,
        Func<TResult> onCatchAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Valid => onValid(),
            _ when this == Invalid => onInvalid(),
            _ when this == Unknown => onUnknown(),
            _ when this == CatchAll => onCatchAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onValid, Action onInvalid, Action onUnknown, Action onCatchAll, Action<string> otherwise)
    {
        if (this == Valid) onValid();
        else if (this == Invalid) onInvalid();
        else if (this == Unknown) onUnknown();
        else if (this == CatchAll) onCatchAll();
        else otherwise(Value);
    }
}
