using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Recommendation>))]
public sealed record Recommendation : OpenStringEnum<Recommendation>
{
    private Recommendation(string value) : base(value)
    {
    }

    public static readonly Recommendation FastTrack = new("fast_track");

    public static readonly Recommendation Standard = new("standard");

    public static readonly Recommendation VerifyFirst = new("verify_first");

    public static readonly Recommendation LowPriority = new("low_priority");

    public TResult Match<TResult>(Func<TResult> onFastTrack,
        Func<TResult> onStandard,
        Func<TResult> onVerifyFirst,
        Func<TResult> onLowPriority,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FastTrack => onFastTrack(),
            _ when this == Standard => onStandard(),
            _ when this == VerifyFirst => onVerifyFirst(),
            _ when this == LowPriority => onLowPriority(),
            _ => otherwise(Value)
        };

    public void Match(Action onFastTrack,
        Action onStandard,
        Action onVerifyFirst,
        Action onLowPriority,
        Action<string> otherwise)
    {
        if (this == FastTrack) onFastTrack();
        else if (this == Standard) onStandard();
        else if (this == VerifyFirst) onVerifyFirst();
        else if (this == LowPriority) onLowPriority();
        else otherwise(Value);
    }
}
