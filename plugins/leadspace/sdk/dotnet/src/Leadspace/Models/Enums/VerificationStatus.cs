using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<VerificationStatus>))]
public sealed record VerificationStatus : OpenStringEnum<VerificationStatus>
{
    private VerificationStatus(string value) : base(value)
    {
    }

    public static readonly VerificationStatus Moved = new("Moved");

    public static readonly VerificationStatus Verified = new("Verified");

    public static readonly VerificationStatus NotVerified = new("Not Verified");

    public TResult Match<TResult>(Func<TResult> onMoved,
        Func<TResult> onVerified,
        Func<TResult> onNotVerified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Moved => onMoved(),
            _ when this == Verified => onVerified(),
            _ when this == NotVerified => onNotVerified(),
            _ => otherwise(Value)
        };

    public void Match(Action onMoved, Action onVerified, Action onNotVerified, Action<string> otherwise)
    {
        if (this == Moved) onMoved();
        else if (this == Verified) onVerified();
        else if (this == NotVerified) onNotVerified();
        else otherwise(Value);
    }
}
