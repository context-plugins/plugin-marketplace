using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypePrismaReviewsLocationsApi>))]
public sealed record TypePrismaReviewsLocationsApi : OpenStringEnum<TypePrismaReviewsLocationsApi>
{
    private TypePrismaReviewsLocationsApi(string value) : base(value)
    {
    }

    public static readonly TypePrismaReviewsLocationsApi WriteReview = new("write_review");

    public static readonly TypePrismaReviewsLocationsApi Listing = new("listing");

    public TResult Match<TResult>(Func<TResult> onWriteReview,
        Func<TResult> onListing,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WriteReview => onWriteReview(),
            _ when this == Listing => onListing(),
            _ => otherwise(Value)
        };

    public void Match(Action onWriteReview, Action onListing, Action<string> otherwise)
    {
        if (this == WriteReview) onWriteReview();
        else if (this == Listing) onListing();
        else otherwise(Value);
    }
}
