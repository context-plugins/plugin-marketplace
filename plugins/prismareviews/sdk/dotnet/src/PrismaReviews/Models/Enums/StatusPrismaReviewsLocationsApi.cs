using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusPrismaReviewsLocationsApi>))]
public sealed record StatusPrismaReviewsLocationsApi : OpenStringEnum<StatusPrismaReviewsLocationsApi>
{
    private StatusPrismaReviewsLocationsApi(string value) : base(value)
    {
    }

    public static readonly StatusPrismaReviewsLocationsApi Active = new("active");

    public static readonly StatusPrismaReviewsLocationsApi Disconnected = new("disconnected");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onDisconnected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Disconnected => onDisconnected(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDisconnected, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Disconnected) onDisconnected();
        else otherwise(Value);
    }
}
