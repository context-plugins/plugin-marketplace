using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusPrismaReviewsWebhooksApi>))]
public sealed record StatusPrismaReviewsWebhooksApi : OpenStringEnum<StatusPrismaReviewsWebhooksApi>
{
    private StatusPrismaReviewsWebhooksApi(string value) : base(value)
    {
    }

    public static readonly StatusPrismaReviewsWebhooksApi Active = new("active");

    public static readonly StatusPrismaReviewsWebhooksApi ReauthRequired = new("reauth_required");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onReauthRequired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == ReauthRequired => onReauthRequired(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onReauthRequired, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == ReauthRequired) onReauthRequired();
        else otherwise(Value);
    }
}
