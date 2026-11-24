using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Extensions;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models.AnyOf;

/// <summary>
/// The link to send customers to ask for a review (email, SMS, QR code). <c>type: "write_review"</c> opens the platform's review form; <c>listing</c> is the public page with its review button. <c>null</c> where only verified buyers or guests can review (Booking.com, eBay, Etsy, shop-review apps).
/// </summary>
[JsonConverter(typeof(ReviewLink1Converter))]
public record ReviewLink1
{
    private readonly Optional<ReviewLink> _reviewLinkValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ReviewLink1(Optional<ReviewLink> reviewLinkValue, Optional<UnknownArm> unknownValue)
    {
        _reviewLinkValue = reviewLinkValue;
        _unknownValue = unknownValue;
    }

    public static ReviewLink1 ReviewLink(ReviewLink value) => new(Optional<ReviewLink>.Some(value), default);

    internal static ReviewLink1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReviewLink([NotNullWhen(true)] out ReviewLink? value) => _reviewLinkValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ReviewLink1(ReviewLink value) => ReviewLink(value);

    public TResult Match<TResult>(Func<ReviewLink, TResult> onReviewLink, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReviewLink(out var reviewLinkValue) => onReviewLink(reviewLinkValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ReviewLink1)} holds no value.")
        };

    public void Match(Action<ReviewLink> onReviewLink, Action<JsonElement> otherwise)
    {
        if (TryGetReviewLink(out var reviewLinkValue)) onReviewLink(reviewLinkValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ReviewLink1)} holds no value.");
    }
}

file sealed class ReviewLink1Converter : JsonConverter<ReviewLink1>
{
    public override ReviewLink1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReviewLink>(root, options, out var reviewLinkValue))
        {
            return ReviewLink1.ReviewLink(reviewLinkValue);
        }
        return ReviewLink1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ReviewLink1 value, JsonSerializerOptions options)
    {
        if (value.TryGetReviewLink(out var reviewLinkValue))
        {
            JsonSerializer.Serialize(writer, reviewLinkValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ReviewLink1)} contains no valid value to serialize.");
        }
    }
}
