using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// <c>unsigned</c>: the pack carries no signature. <c>no_key</c>: it is signed but this deployment has no key to check it with. <c>invalid</c>: the signature or key id does not match.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Signature>))]
public sealed record Signature : OpenStringEnum<Signature>
{
    private Signature(string value) : base(value)
    {
    }

    public static readonly Signature Valid = new("valid");

    public static readonly Signature Invalid = new("invalid");

    public static readonly Signature Unsigned = new("unsigned");

    public static readonly Signature NoKey = new("no_key");

    public TResult Match<TResult>(Func<TResult> onValid,
        Func<TResult> onInvalid,
        Func<TResult> onUnsigned,
        Func<TResult> onNoKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Valid => onValid(),
            _ when this == Invalid => onInvalid(),
            _ when this == Unsigned => onUnsigned(),
            _ when this == NoKey => onNoKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onValid, Action onInvalid, Action onUnsigned, Action onNoKey, Action<string> otherwise)
    {
        if (this == Valid) onValid();
        else if (this == Invalid) onInvalid();
        else if (this == Unsigned) onUnsigned();
        else if (this == NoKey) onNoKey();
        else otherwise(Value);
    }
}
