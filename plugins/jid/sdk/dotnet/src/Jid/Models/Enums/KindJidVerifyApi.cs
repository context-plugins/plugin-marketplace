using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindJidVerifyApi>))]
public sealed record KindJidVerifyApi : OpenStringEnum<KindJidVerifyApi>
{
    private KindJidVerifyApi(string value) : base(value)
    {
    }

    public static readonly KindJidVerifyApi Registration = new("registration");

    public static readonly KindJidVerifyApi Flag = new("flag");

    public static readonly KindJidVerifyApi Unheld = new("unheld");

    public TResult Match<TResult>(Func<TResult> onRegistration,
        Func<TResult> onFlag,
        Func<TResult> onUnheld,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Registration => onRegistration(),
            _ when this == Flag => onFlag(),
            _ when this == Unheld => onUnheld(),
            _ => otherwise(Value)
        };

    public void Match(Action onRegistration, Action onFlag, Action onUnheld, Action<string> otherwise)
    {
        if (this == Registration) onRegistration();
        else if (this == Flag) onFlag();
        else if (this == Unheld) onUnheld();
        else otherwise(Value);
    }
}
