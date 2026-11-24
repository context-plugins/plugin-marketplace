using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Extensions;
using PrismaReviews.Core.Models;
using PrismaReviews.Models;

namespace PrismaReviews.Webhooks;

[JsonConverter(typeof(PrismaReviewsEventPayloadConverter))]
public record PrismaReviewsEventPayload
{
    private readonly Optional<ReviewCreatedRequest> _reviewCreatedRequestValue;

    private readonly Optional<ReviewUpdatedRequest> _reviewUpdatedRequestValue;

    private readonly Optional<ReplyPublishedRequest> _replyPublishedRequestValue;

    private readonly Optional<ReplyFailedRequest> _replyFailedRequestValue;

    private readonly Optional<ReplyUnknownRequest> _replyUnknownRequestValue;

    private readonly Optional<ConnectionUpdatedRequest> _connectionUpdatedRequestValue;

    private readonly Optional<LocationSyncFailedRequest> _locationSyncFailedRequestValue;

    private readonly Optional<LocationSyncRecoveredRequest> _locationSyncRecoveredRequestValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PrismaReviewsEventPayload(Optional<ReviewCreatedRequest> reviewCreatedRequestValue,
        Optional<ReviewUpdatedRequest> reviewUpdatedRequestValue,
        Optional<ReplyPublishedRequest> replyPublishedRequestValue,
        Optional<ReplyFailedRequest> replyFailedRequestValue,
        Optional<ReplyUnknownRequest> replyUnknownRequestValue,
        Optional<ConnectionUpdatedRequest> connectionUpdatedRequestValue,
        Optional<LocationSyncFailedRequest> locationSyncFailedRequestValue,
        Optional<LocationSyncRecoveredRequest> locationSyncRecoveredRequestValue,
        Optional<UnknownArm> unknownValue)
    {
        _reviewCreatedRequestValue = reviewCreatedRequestValue;
        _reviewUpdatedRequestValue = reviewUpdatedRequestValue;
        _replyPublishedRequestValue = replyPublishedRequestValue;
        _replyFailedRequestValue = replyFailedRequestValue;
        _replyUnknownRequestValue = replyUnknownRequestValue;
        _connectionUpdatedRequestValue = connectionUpdatedRequestValue;
        _locationSyncFailedRequestValue = locationSyncFailedRequestValue;
        _locationSyncRecoveredRequestValue = locationSyncRecoveredRequestValue;
        _unknownValue = unknownValue;
    }

    public static PrismaReviewsEventPayload ReviewCreatedRequest(ReviewCreatedRequest value) =>
        new(
            Optional<ReviewCreatedRequest>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PrismaReviewsEventPayload ReviewUpdatedRequest(ReviewUpdatedRequest value) =>
        new(
            default,
            Optional<ReviewUpdatedRequest>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PrismaReviewsEventPayload ReplyPublishedRequest(ReplyPublishedRequest value) =>
        new(
            default,
            default,
            Optional<ReplyPublishedRequest>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static PrismaReviewsEventPayload ReplyFailedRequest(ReplyFailedRequest value) =>
        new(
            default,
            default,
            default,
            Optional<ReplyFailedRequest>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static PrismaReviewsEventPayload ReplyUnknownRequest(ReplyUnknownRequest value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ReplyUnknownRequest>.Some(value),
            default,
            default,
            default,
            default);

    public static PrismaReviewsEventPayload ConnectionUpdatedRequest(ConnectionUpdatedRequest value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ConnectionUpdatedRequest>.Some(value),
            default,
            default,
            default);

    public static PrismaReviewsEventPayload LocationSyncFailedRequest(LocationSyncFailedRequest value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<LocationSyncFailedRequest>.Some(value),
            default,
            default);

    public static PrismaReviewsEventPayload LocationSyncRecoveredRequest(LocationSyncRecoveredRequest value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<LocationSyncRecoveredRequest>.Some(value),
            default);

    internal static PrismaReviewsEventPayload Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReviewCreatedRequest([NotNullWhen(true)] out ReviewCreatedRequest? value) =>
        _reviewCreatedRequestValue.TryGetValue(out value);

    public bool TryGetReviewUpdatedRequest([NotNullWhen(true)] out ReviewUpdatedRequest? value) =>
        _reviewUpdatedRequestValue.TryGetValue(out value);

    public bool TryGetReplyPublishedRequest([NotNullWhen(true)] out ReplyPublishedRequest? value) =>
        _replyPublishedRequestValue.TryGetValue(out value);

    public bool TryGetReplyFailedRequest([NotNullWhen(true)] out ReplyFailedRequest? value) =>
        _replyFailedRequestValue.TryGetValue(out value);

    public bool TryGetReplyUnknownRequest([NotNullWhen(true)] out ReplyUnknownRequest? value) =>
        _replyUnknownRequestValue.TryGetValue(out value);

    public bool TryGetConnectionUpdatedRequest([NotNullWhen(true)] out ConnectionUpdatedRequest? value) =>
        _connectionUpdatedRequestValue.TryGetValue(out value);

    public bool TryGetLocationSyncFailedRequest([NotNullWhen(true)] out LocationSyncFailedRequest? value) =>
        _locationSyncFailedRequestValue.TryGetValue(out value);

    public bool TryGetLocationSyncRecoveredRequest([NotNullWhen(true)] out LocationSyncRecoveredRequest? value) =>
        _locationSyncRecoveredRequestValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PrismaReviewsEventPayload(ReviewCreatedRequest value) =>
        ReviewCreatedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(ReviewUpdatedRequest value) =>
        ReviewUpdatedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(ReplyPublishedRequest value) =>
        ReplyPublishedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(ReplyFailedRequest value) => ReplyFailedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(ReplyUnknownRequest value) => ReplyUnknownRequest(value);

    public static implicit operator PrismaReviewsEventPayload(ConnectionUpdatedRequest value) =>
        ConnectionUpdatedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(LocationSyncFailedRequest value) =>
        LocationSyncFailedRequest(value);

    public static implicit operator PrismaReviewsEventPayload(LocationSyncRecoveredRequest value) =>
        LocationSyncRecoveredRequest(value);

    public TResult Match<TResult>(Func<ReviewCreatedRequest, TResult> onReviewCreatedRequest,
        Func<ReviewUpdatedRequest, TResult> onReviewUpdatedRequest,
        Func<ReplyPublishedRequest, TResult> onReplyPublishedRequest,
        Func<ReplyFailedRequest, TResult> onReplyFailedRequest,
        Func<ReplyUnknownRequest, TResult> onReplyUnknownRequest,
        Func<ConnectionUpdatedRequest, TResult> onConnectionUpdatedRequest,
        Func<LocationSyncFailedRequest, TResult> onLocationSyncFailedRequest,
        Func<LocationSyncRecoveredRequest, TResult> onLocationSyncRecoveredRequest,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReviewCreatedRequest(out var reviewCreatedRequestValue) => onReviewCreatedRequest(
                reviewCreatedRequestValue),
            _ when TryGetReviewUpdatedRequest(out var reviewUpdatedRequestValue) => onReviewUpdatedRequest(
                reviewUpdatedRequestValue),
            _ when TryGetReplyPublishedRequest(out var replyPublishedRequestValue) => onReplyPublishedRequest(
                replyPublishedRequestValue),
            _ when TryGetReplyFailedRequest(out var replyFailedRequestValue) => onReplyFailedRequest(
                replyFailedRequestValue),
            _ when TryGetReplyUnknownRequest(out var replyUnknownRequestValue) => onReplyUnknownRequest(
                replyUnknownRequestValue),
            _ when TryGetConnectionUpdatedRequest(out var connectionUpdatedRequestValue) => onConnectionUpdatedRequest(
                connectionUpdatedRequestValue),
            _ when TryGetLocationSyncFailedRequest(
                out var locationSyncFailedRequestValue) => onLocationSyncFailedRequest(locationSyncFailedRequestValue),
            _ when TryGetLocationSyncRecoveredRequest(
                out var locationSyncRecoveredRequestValue) => onLocationSyncRecoveredRequest(
                locationSyncRecoveredRequestValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PrismaReviewsEventPayload)} holds no value.")
        };

    public void Match(Action<ReviewCreatedRequest> onReviewCreatedRequest,
        Action<ReviewUpdatedRequest> onReviewUpdatedRequest,
        Action<ReplyPublishedRequest> onReplyPublishedRequest,
        Action<ReplyFailedRequest> onReplyFailedRequest,
        Action<ReplyUnknownRequest> onReplyUnknownRequest,
        Action<ConnectionUpdatedRequest> onConnectionUpdatedRequest,
        Action<LocationSyncFailedRequest> onLocationSyncFailedRequest,
        Action<LocationSyncRecoveredRequest> onLocationSyncRecoveredRequest,
        Action<JsonElement> otherwise)
    {
        if (TryGetReviewCreatedRequest(out var reviewCreatedRequestValue)) onReviewCreatedRequest(
            reviewCreatedRequestValue);
        else if (TryGetReviewUpdatedRequest(out var reviewUpdatedRequestValue)) onReviewUpdatedRequest(
            reviewUpdatedRequestValue);
        else if (TryGetReplyPublishedRequest(out var replyPublishedRequestValue)) onReplyPublishedRequest(
            replyPublishedRequestValue);
        else if (TryGetReplyFailedRequest(out var replyFailedRequestValue)) onReplyFailedRequest(
            replyFailedRequestValue);
        else if (TryGetReplyUnknownRequest(out var replyUnknownRequestValue)) onReplyUnknownRequest(
            replyUnknownRequestValue);
        else if (TryGetConnectionUpdatedRequest(out var connectionUpdatedRequestValue)) onConnectionUpdatedRequest(
            connectionUpdatedRequestValue);
        else if (TryGetLocationSyncFailedRequest(out var locationSyncFailedRequestValue)) onLocationSyncFailedRequest(
            locationSyncFailedRequestValue);
        else if (TryGetLocationSyncRecoveredRequest(
            out var locationSyncRecoveredRequestValue)) onLocationSyncRecoveredRequest(
            locationSyncRecoveredRequestValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PrismaReviewsEventPayload)} holds no value.");
    }
}

file sealed class PrismaReviewsEventPayloadConverter : JsonConverter<PrismaReviewsEventPayload>
{
    public override PrismaReviewsEventPayload Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReviewCreatedRequest>(root, options, out var reviewCreatedRequestValue))
        {
            return PrismaReviewsEventPayload.ReviewCreatedRequest(reviewCreatedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ReviewUpdatedRequest>(root, options, out var reviewUpdatedRequestValue))
        {
            return PrismaReviewsEventPayload.ReviewUpdatedRequest(reviewUpdatedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ReplyPublishedRequest>(root, options, out var replyPublishedRequestValue))
        {
            return PrismaReviewsEventPayload.ReplyPublishedRequest(replyPublishedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ReplyFailedRequest>(root, options, out var replyFailedRequestValue))
        {
            return PrismaReviewsEventPayload.ReplyFailedRequest(replyFailedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ReplyUnknownRequest>(root, options, out var replyUnknownRequestValue))
        {
            return PrismaReviewsEventPayload.ReplyUnknownRequest(replyUnknownRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ConnectionUpdatedRequest>(
            root,
            options,
            out var connectionUpdatedRequestValue))
        {
            return PrismaReviewsEventPayload.ConnectionUpdatedRequest(connectionUpdatedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<LocationSyncFailedRequest>(
            root,
            options,
            out var locationSyncFailedRequestValue))
        {
            return PrismaReviewsEventPayload.LocationSyncFailedRequest(locationSyncFailedRequestValue);
        }
        if (JsonSerializer.TryDeserialize<LocationSyncRecoveredRequest>(
            root,
            options,
            out var locationSyncRecoveredRequestValue))
        {
            return PrismaReviewsEventPayload.LocationSyncRecoveredRequest(locationSyncRecoveredRequestValue);
        }
        return PrismaReviewsEventPayload.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PrismaReviewsEventPayload value, JsonSerializerOptions options)
    {
        if (value.TryGetReviewCreatedRequest(out var reviewCreatedRequestValue))
        {
            JsonSerializer.Serialize(writer, reviewCreatedRequestValue, options);
        }
        else if (value.TryGetReviewUpdatedRequest(out var reviewUpdatedRequestValue))
        {
            JsonSerializer.Serialize(writer, reviewUpdatedRequestValue, options);
        }
        else if (value.TryGetReplyPublishedRequest(out var replyPublishedRequestValue))
        {
            JsonSerializer.Serialize(writer, replyPublishedRequestValue, options);
        }
        else if (value.TryGetReplyFailedRequest(out var replyFailedRequestValue))
        {
            JsonSerializer.Serialize(writer, replyFailedRequestValue, options);
        }
        else if (value.TryGetReplyUnknownRequest(out var replyUnknownRequestValue))
        {
            JsonSerializer.Serialize(writer, replyUnknownRequestValue, options);
        }
        else if (value.TryGetConnectionUpdatedRequest(out var connectionUpdatedRequestValue))
        {
            JsonSerializer.Serialize(writer, connectionUpdatedRequestValue, options);
        }
        else if (value.TryGetLocationSyncFailedRequest(out var locationSyncFailedRequestValue))
        {
            JsonSerializer.Serialize(writer, locationSyncFailedRequestValue, options);
        }
        else if (value.TryGetLocationSyncRecoveredRequest(out var locationSyncRecoveredRequestValue))
        {
            JsonSerializer.Serialize(writer, locationSyncRecoveredRequestValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PrismaReviewsEventPayload)} contains no valid value to serialize.");
        }
    }
}
