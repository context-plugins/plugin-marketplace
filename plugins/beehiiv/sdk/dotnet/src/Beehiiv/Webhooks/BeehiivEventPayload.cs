using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;
using Beehiiv.Models;

namespace Beehiiv.Webhooks;

[JsonConverter(typeof(BeehiivEventPayloadConverter))]
public record BeehiivEventPayload
{
    private readonly Optional<NewsletterListSubscription> _newsletterListSubscriptionValue;

    private readonly Optional<SubscriptionBeehiivWebhooksApi> _subscriptionBeehiivWebhooksApiValue;

    private readonly Optional<PodcastEpisodeBeehiivWebhooksApi> _podcastEpisodeBeehiivWebhooksApiValue;

    private readonly Optional<PodcastPrivateFeed> _podcastPrivateFeedValue;

    private readonly Optional<PostBeehiivWebhooksApi> _postBeehiivWebhooksApiValue;

    private readonly Optional<SurveyResponse> _surveyResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private BeehiivEventPayload(Optional<NewsletterListSubscription> newsletterListSubscriptionValue,
        Optional<SubscriptionBeehiivWebhooksApi> subscriptionBeehiivWebhooksApiValue,
        Optional<PodcastEpisodeBeehiivWebhooksApi> podcastEpisodeBeehiivWebhooksApiValue,
        Optional<PodcastPrivateFeed> podcastPrivateFeedValue,
        Optional<PostBeehiivWebhooksApi> postBeehiivWebhooksApiValue,
        Optional<SurveyResponse> surveyResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _newsletterListSubscriptionValue = newsletterListSubscriptionValue;
        _subscriptionBeehiivWebhooksApiValue = subscriptionBeehiivWebhooksApiValue;
        _podcastEpisodeBeehiivWebhooksApiValue = podcastEpisodeBeehiivWebhooksApiValue;
        _podcastPrivateFeedValue = podcastPrivateFeedValue;
        _postBeehiivWebhooksApiValue = postBeehiivWebhooksApiValue;
        _surveyResponseValue = surveyResponseValue;
        _unknownValue = unknownValue;
    }

    public static BeehiivEventPayload NewsletterListSubscription(NewsletterListSubscription value) =>
        new(Optional<NewsletterListSubscription>.Some(value), default, default, default, default, default, default);

    public static BeehiivEventPayload SubscriptionBeehiivWebhooksApi(SubscriptionBeehiivWebhooksApi value) =>
        new(default, Optional<SubscriptionBeehiivWebhooksApi>.Some(value), default, default, default, default, default);

    public static BeehiivEventPayload PodcastEpisodeBeehiivWebhooksApi(PodcastEpisodeBeehiivWebhooksApi value) =>
        new(
            default,
            default,
            Optional<PodcastEpisodeBeehiivWebhooksApi>.Some(value),
            default,
            default,
            default,
            default);

    public static BeehiivEventPayload PodcastPrivateFeed(PodcastPrivateFeed value) =>
        new(default, default, default, Optional<PodcastPrivateFeed>.Some(value), default, default, default);

    public static BeehiivEventPayload PostBeehiivWebhooksApi(PostBeehiivWebhooksApi value) =>
        new(default, default, default, default, Optional<PostBeehiivWebhooksApi>.Some(value), default, default);

    public static BeehiivEventPayload SurveyResponse(SurveyResponse value) =>
        new(default, default, default, default, default, Optional<SurveyResponse>.Some(value), default);

    internal static BeehiivEventPayload Unknown(JsonElement value) =>
        new(default, default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetNewsletterListSubscription([NotNullWhen(true)] out NewsletterListSubscription? value) =>
        _newsletterListSubscriptionValue.TryGetValue(out value);

    public bool TryGetSubscriptionBeehiivWebhooksApi([NotNullWhen(true)] out SubscriptionBeehiivWebhooksApi? value) =>
        _subscriptionBeehiivWebhooksApiValue.TryGetValue(out value);

    public bool TryGetPodcastEpisodeBeehiivWebhooksApi([NotNullWhen(true)] out PodcastEpisodeBeehiivWebhooksApi? value) =>
        _podcastEpisodeBeehiivWebhooksApiValue.TryGetValue(out value);

    public bool TryGetPodcastPrivateFeed([NotNullWhen(true)] out PodcastPrivateFeed? value) =>
        _podcastPrivateFeedValue.TryGetValue(out value);

    public bool TryGetPostBeehiivWebhooksApi([NotNullWhen(true)] out PostBeehiivWebhooksApi? value) =>
        _postBeehiivWebhooksApiValue.TryGetValue(out value);

    public bool TryGetSurveyResponse([NotNullWhen(true)] out SurveyResponse? value) =>
        _surveyResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator BeehiivEventPayload(NewsletterListSubscription value) =>
        NewsletterListSubscription(value);

    public static implicit operator BeehiivEventPayload(SubscriptionBeehiivWebhooksApi value) =>
        SubscriptionBeehiivWebhooksApi(value);

    public static implicit operator BeehiivEventPayload(PodcastEpisodeBeehiivWebhooksApi value) =>
        PodcastEpisodeBeehiivWebhooksApi(value);

    public static implicit operator BeehiivEventPayload(PodcastPrivateFeed value) => PodcastPrivateFeed(value);

    public static implicit operator BeehiivEventPayload(PostBeehiivWebhooksApi value) => PostBeehiivWebhooksApi(value);

    public static implicit operator BeehiivEventPayload(SurveyResponse value) => SurveyResponse(value);

    public TResult Match<TResult>(Func<NewsletterListSubscription, TResult> onNewsletterListSubscription,
        Func<SubscriptionBeehiivWebhooksApi, TResult> onSubscriptionBeehiivWebhooksApi,
        Func<PodcastEpisodeBeehiivWebhooksApi, TResult> onPodcastEpisodeBeehiivWebhooksApi,
        Func<PodcastPrivateFeed, TResult> onPodcastPrivateFeed,
        Func<PostBeehiivWebhooksApi, TResult> onPostBeehiivWebhooksApi,
        Func<SurveyResponse, TResult> onSurveyResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNewsletterListSubscription(
                out var newsletterListSubscriptionValue) => onNewsletterListSubscription(
                newsletterListSubscriptionValue),
            _ when TryGetSubscriptionBeehiivWebhooksApi(
                out var subscriptionBeehiivWebhooksApiValue) => onSubscriptionBeehiivWebhooksApi(
                subscriptionBeehiivWebhooksApiValue),
            _ when TryGetPodcastEpisodeBeehiivWebhooksApi(
                out var podcastEpisodeBeehiivWebhooksApiValue) => onPodcastEpisodeBeehiivWebhooksApi(
                podcastEpisodeBeehiivWebhooksApiValue),
            _ when TryGetPodcastPrivateFeed(out var podcastPrivateFeedValue) => onPodcastPrivateFeed(
                podcastPrivateFeedValue),
            _ when TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApiValue) => onPostBeehiivWebhooksApi(
                postBeehiivWebhooksApiValue),
            _ when TryGetSurveyResponse(out var surveyResponseValue) => onSurveyResponse(surveyResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(BeehiivEventPayload)} holds no value.")
        };

    public void Match(Action<NewsletterListSubscription> onNewsletterListSubscription,
        Action<SubscriptionBeehiivWebhooksApi> onSubscriptionBeehiivWebhooksApi,
        Action<PodcastEpisodeBeehiivWebhooksApi> onPodcastEpisodeBeehiivWebhooksApi,
        Action<PodcastPrivateFeed> onPodcastPrivateFeed,
        Action<PostBeehiivWebhooksApi> onPostBeehiivWebhooksApi,
        Action<SurveyResponse> onSurveyResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetNewsletterListSubscription(out var newsletterListSubscriptionValue)) onNewsletterListSubscription(
            newsletterListSubscriptionValue);
        else if (TryGetSubscriptionBeehiivWebhooksApi(
            out var subscriptionBeehiivWebhooksApiValue)) onSubscriptionBeehiivWebhooksApi(
            subscriptionBeehiivWebhooksApiValue);
        else if (TryGetPodcastEpisodeBeehiivWebhooksApi(
            out var podcastEpisodeBeehiivWebhooksApiValue)) onPodcastEpisodeBeehiivWebhooksApi(
            podcastEpisodeBeehiivWebhooksApiValue);
        else if (TryGetPodcastPrivateFeed(out var podcastPrivateFeedValue)) onPodcastPrivateFeed(
            podcastPrivateFeedValue);
        else if (TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApiValue)) onPostBeehiivWebhooksApi(
            postBeehiivWebhooksApiValue);
        else if (TryGetSurveyResponse(out var surveyResponseValue)) onSurveyResponse(surveyResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(BeehiivEventPayload)} holds no value.");
    }
}

file sealed class BeehiivEventPayloadConverter : JsonConverter<BeehiivEventPayload>
{
    public override BeehiivEventPayload Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<NewsletterListSubscription>(
            root,
            options,
            out var newsletterListSubscriptionValue))
        {
            return BeehiivEventPayload.NewsletterListSubscription(newsletterListSubscriptionValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionBeehiivWebhooksApi>(
            root,
            options,
            out var subscriptionBeehiivWebhooksApiValue))
        {
            return BeehiivEventPayload.SubscriptionBeehiivWebhooksApi(subscriptionBeehiivWebhooksApiValue);
        }
        if (JsonSerializer.TryDeserialize<PodcastEpisodeBeehiivWebhooksApi>(
            root,
            options,
            out var podcastEpisodeBeehiivWebhooksApiValue))
        {
            return BeehiivEventPayload.PodcastEpisodeBeehiivWebhooksApi(podcastEpisodeBeehiivWebhooksApiValue);
        }
        if (JsonSerializer.TryDeserialize<PodcastPrivateFeed>(root, options, out var podcastPrivateFeedValue))
        {
            return BeehiivEventPayload.PodcastPrivateFeed(podcastPrivateFeedValue);
        }
        if (JsonSerializer.TryDeserialize<PostBeehiivWebhooksApi>(root, options, out var postBeehiivWebhooksApiValue))
        {
            return BeehiivEventPayload.PostBeehiivWebhooksApi(postBeehiivWebhooksApiValue);
        }
        if (JsonSerializer.TryDeserialize<SurveyResponse>(root, options, out var surveyResponseValue))
        {
            return BeehiivEventPayload.SurveyResponse(surveyResponseValue);
        }
        return BeehiivEventPayload.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, BeehiivEventPayload value, JsonSerializerOptions options)
    {
        if (value.TryGetNewsletterListSubscription(out var newsletterListSubscriptionValue))
        {
            JsonSerializer.Serialize(writer, newsletterListSubscriptionValue, options);
        }
        else if (value.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApiValue))
        {
            JsonSerializer.Serialize(writer, subscriptionBeehiivWebhooksApiValue, options);
        }
        else if (value.TryGetPodcastEpisodeBeehiivWebhooksApi(out var podcastEpisodeBeehiivWebhooksApiValue))
        {
            JsonSerializer.Serialize(writer, podcastEpisodeBeehiivWebhooksApiValue, options);
        }
        else if (value.TryGetPodcastPrivateFeed(out var podcastPrivateFeedValue))
        {
            JsonSerializer.Serialize(writer, podcastPrivateFeedValue, options);
        }
        else if (value.TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApiValue))
        {
            JsonSerializer.Serialize(writer, postBeehiivWebhooksApiValue, options);
        }
        else if (value.TryGetSurveyResponse(out var surveyResponseValue))
        {
            JsonSerializer.Serialize(writer, surveyResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(BeehiivEventPayload)} contains no valid value to serialize.");
        }
    }
}
