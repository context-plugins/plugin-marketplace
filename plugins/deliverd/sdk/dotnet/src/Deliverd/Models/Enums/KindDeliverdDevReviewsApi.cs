using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevReviewsApi>))]
public sealed record KindDeliverdDevReviewsApi : OpenStringEnum<KindDeliverdDevReviewsApi>
{
    private KindDeliverdDevReviewsApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevReviewsApi User = new("user");

    public static readonly KindDeliverdDevReviewsApi Guest = new("guest");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onGuest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Guest => onGuest(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onGuest, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Guest) onGuest();
        else otherwise(Value);
    }
}
