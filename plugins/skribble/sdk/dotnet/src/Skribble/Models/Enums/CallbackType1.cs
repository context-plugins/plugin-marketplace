using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// The type of this callback.
/// <para>
/// Possible values:
///   - <b>SUCCESS</b> Is triggered when the document has been successfully signed by all parties involved.
///   - <b>UPDATE</b> Is triggered on changes on the <c>SignatureRequest</c> object like when one person of all involved parties has signed.
///   - <b>ERROR</b> Is triggered when a person declines the signature or when the <c>SignatureRequest</c> is withdrawn.
///   - <b>START_SIGN</b> Is triggered when a person starts the signature process (only for Express QES).
///   - <b>IDENT_PENDING</b> Is triggered when the identification of a person within a signature process requires manual review.
///   - <b>IDENT_ERROR</b> Is triggered when the identification of a person within a signature process ended in an error.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CallbackType1>))]
public sealed record CallbackType1 : OpenStringEnum<CallbackType1>
{
    private CallbackType1(string value) : base(value)
    {
    }

    public static readonly CallbackType1 Success = new("SUCCESS");

    public static readonly CallbackType1 Update = new("UPDATE");

    public static readonly CallbackType1 Error = new("ERROR");

    public static readonly CallbackType1 StartSign = new("START_SIGN");

    public static readonly CallbackType1 IdentPending = new("IDENT_PENDING");

    public static readonly CallbackType1 IdentError = new("IDENT_ERROR");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onUpdate,
        Func<TResult> onError,
        Func<TResult> onStartSign,
        Func<TResult> onIdentPending,
        Func<TResult> onIdentError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Update => onUpdate(),
            _ when this == Error => onError(),
            _ when this == StartSign => onStartSign(),
            _ when this == IdentPending => onIdentPending(),
            _ when this == IdentError => onIdentError(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess,
        Action onUpdate,
        Action onError,
        Action onStartSign,
        Action onIdentPending,
        Action onIdentError,
        Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Update) onUpdate();
        else if (this == Error) onError();
        else if (this == StartSign) onStartSign();
        else if (this == IdentPending) onIdentPending();
        else if (this == IdentError) onIdentError();
        else otherwise(Value);
    }
}
