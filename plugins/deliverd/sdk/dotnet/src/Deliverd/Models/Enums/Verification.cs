using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verification>))]
public sealed record Verification : OpenStringEnum<Verification>
{
    private Verification(string value) : base(value)
    {
    }

    public static readonly Verification Verified = new("verified");

    public static readonly Verification HashMatched = new("hash_matched");

    public static readonly Verification Reported = new("reported");

    public TResult Match<TResult>(Func<TResult> onVerified,
        Func<TResult> onHashMatched,
        Func<TResult> onReported,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Verified => onVerified(),
            _ when this == HashMatched => onHashMatched(),
            _ when this == Reported => onReported(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerified, Action onHashMatched, Action onReported, Action<string> otherwise)
    {
        if (this == Verified) onVerified();
        else if (this == HashMatched) onHashMatched();
        else if (this == Reported) onReported();
        else otherwise(Value);
    }
}
