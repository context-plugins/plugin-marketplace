using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// <c>verify_email</c>: verify the account email first. <c>not_applicable</c>: the workspace has paid reads of its own, used instead.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusPrismaReviewsUsageApi>))]
public sealed record StatusPrismaReviewsUsageApi : OpenStringEnum<StatusPrismaReviewsUsageApi>
{
    private StatusPrismaReviewsUsageApi(string value) : base(value)
    {
    }

    public static readonly StatusPrismaReviewsUsageApi Available = new("available");

    public static readonly StatusPrismaReviewsUsageApi Active = new("active");

    public static readonly StatusPrismaReviewsUsageApi UsedUp = new("used_up");

    public static readonly StatusPrismaReviewsUsageApi VerifyEmail = new("verify_email");

    public static readonly StatusPrismaReviewsUsageApi NotApplicable = new("not_applicable");

    public TResult Match<TResult>(Func<TResult> onAvailable,
        Func<TResult> onActive,
        Func<TResult> onUsedUp,
        Func<TResult> onVerifyEmail,
        Func<TResult> onNotApplicable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Available => onAvailable(),
            _ when this == Active => onActive(),
            _ when this == UsedUp => onUsedUp(),
            _ when this == VerifyEmail => onVerifyEmail(),
            _ when this == NotApplicable => onNotApplicable(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvailable,
        Action onActive,
        Action onUsedUp,
        Action onVerifyEmail,
        Action onNotApplicable,
        Action<string> otherwise)
    {
        if (this == Available) onAvailable();
        else if (this == Active) onActive();
        else if (this == UsedUp) onUsedUp();
        else if (this == VerifyEmail) onVerifyEmail();
        else if (this == NotApplicable) onNotApplicable();
        else otherwise(Value);
    }
}
