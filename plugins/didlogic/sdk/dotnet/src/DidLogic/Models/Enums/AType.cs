using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Type of the agent leg. <c>sip_account</c> rings one of your SIP accounts; <c>stream</c> connects your own WebSocket endpoint first, where the account allows it.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AType>))]
public sealed record AType : OpenStringEnum<AType>
{
    private AType(string value) : base(value)
    {
    }

    public static readonly AType SipAccount = new("sip_account");

    public static readonly AType Stream = new("stream");

    public TResult Match<TResult>(Func<TResult> onSipAccount,
        Func<TResult> onStream,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SipAccount => onSipAccount(),
            _ when this == Stream => onStream(),
            _ => otherwise(Value)
        };

    public void Match(Action onSipAccount, Action onStream, Action<string> otherwise)
    {
        if (this == SipAccount) onSipAccount();
        else if (this == Stream) onStream();
        else otherwise(Value);
    }
}
