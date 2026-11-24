using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WebhookEventType>))]
public sealed record WebhookEventType : OpenStringEnum<WebhookEventType>
{
    private WebhookEventType(string value) : base(value)
    {
    }

    public static readonly WebhookEventType PostSent = new("post.sent");

    public static readonly WebhookEventType PostUpdated = new("post.updated");

    public static readonly WebhookEventType SubscriptionConfirmed = new("subscription.confirmed");

    public static readonly WebhookEventType SubscriptionCreated = new("subscription.created");

    public static readonly WebhookEventType SubscriptionDowngraded = new("subscription.downgraded");

    public static readonly WebhookEventType SubscriptionPaused = new("subscription.paused");

    public static readonly WebhookEventType SubscriptionResumed = new("subscription.resumed");

    public static readonly WebhookEventType SubscriptionTierPaused = new("subscription.tier.paused");

    public static readonly WebhookEventType SubscriptionTierResumed = new("subscription.tier.resumed");

    public static readonly WebhookEventType SubscriptionUpgraded = new("subscription.upgraded");

    public static readonly WebhookEventType SubscriptionTierCreated = new("subscription.tier.created");

    public static readonly WebhookEventType SubscriptionTierDeleted = new("subscription.tier.deleted");

    public static readonly WebhookEventType SubscriptionDeleted = new("subscription.deleted");

    public static readonly WebhookEventType NewsletterListSubscriptionSubscribed = new(
        "newsletter_list_subscription.subscribed");

    public static readonly WebhookEventType NewsletterListSubscriptionUnsubscribed = new(
        "newsletter_list_subscription.unsubscribed");

    public static readonly WebhookEventType NewsletterListSubscriptionPaused = new(
        "newsletter_list_subscription.paused");

    public static readonly WebhookEventType NewsletterListSubscriptionResumed = new(
        "newsletter_list_subscription.resumed");

    public static readonly WebhookEventType PostScheduled = new("post.scheduled");

    public static readonly WebhookEventType SurveyResponseSubmitted = new("survey.response_submitted");

    public static readonly WebhookEventType PodcastsEpisodePublished = new("podcasts.episode.published");

    public static readonly WebhookEventType PodcastsEpisodeUpdated = new("podcasts.episode.updated");

    public static readonly WebhookEventType PodcastsEpisodeArchived = new("podcasts.episode.archived");

    public static readonly WebhookEventType PodcastsEpisodeDeleted = new("podcasts.episode.deleted");

    public static readonly WebhookEventType PodcastsPrivateFeedActivated = new("podcasts.private_feed.activated");

    public TResult Match<TResult>(Func<TResult> onPostSent,
        Func<TResult> onPostUpdated,
        Func<TResult> onSubscriptionConfirmed,
        Func<TResult> onSubscriptionCreated,
        Func<TResult> onSubscriptionDowngraded,
        Func<TResult> onSubscriptionPaused,
        Func<TResult> onSubscriptionResumed,
        Func<TResult> onSubscriptionTierPaused,
        Func<TResult> onSubscriptionTierResumed,
        Func<TResult> onSubscriptionUpgraded,
        Func<TResult> onSubscriptionTierCreated,
        Func<TResult> onSubscriptionTierDeleted,
        Func<TResult> onSubscriptionDeleted,
        Func<TResult> onNewsletterListSubscriptionSubscribed,
        Func<TResult> onNewsletterListSubscriptionUnsubscribed,
        Func<TResult> onNewsletterListSubscriptionPaused,
        Func<TResult> onNewsletterListSubscriptionResumed,
        Func<TResult> onPostScheduled,
        Func<TResult> onSurveyResponseSubmitted,
        Func<TResult> onPodcastsEpisodePublished,
        Func<TResult> onPodcastsEpisodeUpdated,
        Func<TResult> onPodcastsEpisodeArchived,
        Func<TResult> onPodcastsEpisodeDeleted,
        Func<TResult> onPodcastsPrivateFeedActivated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PostSent => onPostSent(),
            _ when this == PostUpdated => onPostUpdated(),
            _ when this == SubscriptionConfirmed => onSubscriptionConfirmed(),
            _ when this == SubscriptionCreated => onSubscriptionCreated(),
            _ when this == SubscriptionDowngraded => onSubscriptionDowngraded(),
            _ when this == SubscriptionPaused => onSubscriptionPaused(),
            _ when this == SubscriptionResumed => onSubscriptionResumed(),
            _ when this == SubscriptionTierPaused => onSubscriptionTierPaused(),
            _ when this == SubscriptionTierResumed => onSubscriptionTierResumed(),
            _ when this == SubscriptionUpgraded => onSubscriptionUpgraded(),
            _ when this == SubscriptionTierCreated => onSubscriptionTierCreated(),
            _ when this == SubscriptionTierDeleted => onSubscriptionTierDeleted(),
            _ when this == SubscriptionDeleted => onSubscriptionDeleted(),
            _ when this == NewsletterListSubscriptionSubscribed => onNewsletterListSubscriptionSubscribed(),
            _ when this == NewsletterListSubscriptionUnsubscribed => onNewsletterListSubscriptionUnsubscribed(),
            _ when this == NewsletterListSubscriptionPaused => onNewsletterListSubscriptionPaused(),
            _ when this == NewsletterListSubscriptionResumed => onNewsletterListSubscriptionResumed(),
            _ when this == PostScheduled => onPostScheduled(),
            _ when this == SurveyResponseSubmitted => onSurveyResponseSubmitted(),
            _ when this == PodcastsEpisodePublished => onPodcastsEpisodePublished(),
            _ when this == PodcastsEpisodeUpdated => onPodcastsEpisodeUpdated(),
            _ when this == PodcastsEpisodeArchived => onPodcastsEpisodeArchived(),
            _ when this == PodcastsEpisodeDeleted => onPodcastsEpisodeDeleted(),
            _ when this == PodcastsPrivateFeedActivated => onPodcastsPrivateFeedActivated(),
            _ => otherwise(Value)
        };

    public void Match(Action onPostSent,
        Action onPostUpdated,
        Action onSubscriptionConfirmed,
        Action onSubscriptionCreated,
        Action onSubscriptionDowngraded,
        Action onSubscriptionPaused,
        Action onSubscriptionResumed,
        Action onSubscriptionTierPaused,
        Action onSubscriptionTierResumed,
        Action onSubscriptionUpgraded,
        Action onSubscriptionTierCreated,
        Action onSubscriptionTierDeleted,
        Action onSubscriptionDeleted,
        Action onNewsletterListSubscriptionSubscribed,
        Action onNewsletterListSubscriptionUnsubscribed,
        Action onNewsletterListSubscriptionPaused,
        Action onNewsletterListSubscriptionResumed,
        Action onPostScheduled,
        Action onSurveyResponseSubmitted,
        Action onPodcastsEpisodePublished,
        Action onPodcastsEpisodeUpdated,
        Action onPodcastsEpisodeArchived,
        Action onPodcastsEpisodeDeleted,
        Action onPodcastsPrivateFeedActivated,
        Action<string> otherwise)
    {
        if (this == PostSent) onPostSent();
        else if (this == PostUpdated) onPostUpdated();
        else if (this == SubscriptionConfirmed) onSubscriptionConfirmed();
        else if (this == SubscriptionCreated) onSubscriptionCreated();
        else if (this == SubscriptionDowngraded) onSubscriptionDowngraded();
        else if (this == SubscriptionPaused) onSubscriptionPaused();
        else if (this == SubscriptionResumed) onSubscriptionResumed();
        else if (this == SubscriptionTierPaused) onSubscriptionTierPaused();
        else if (this == SubscriptionTierResumed) onSubscriptionTierResumed();
        else if (this == SubscriptionUpgraded) onSubscriptionUpgraded();
        else if (this == SubscriptionTierCreated) onSubscriptionTierCreated();
        else if (this == SubscriptionTierDeleted) onSubscriptionTierDeleted();
        else if (this == SubscriptionDeleted) onSubscriptionDeleted();
        else if (this == NewsletterListSubscriptionSubscribed) onNewsletterListSubscriptionSubscribed();
        else if (this == NewsletterListSubscriptionUnsubscribed) onNewsletterListSubscriptionUnsubscribed();
        else if (this == NewsletterListSubscriptionPaused) onNewsletterListSubscriptionPaused();
        else if (this == NewsletterListSubscriptionResumed) onNewsletterListSubscriptionResumed();
        else if (this == PostScheduled) onPostScheduled();
        else if (this == SurveyResponseSubmitted) onSurveyResponseSubmitted();
        else if (this == PodcastsEpisodePublished) onPodcastsEpisodePublished();
        else if (this == PodcastsEpisodeUpdated) onPodcastsEpisodeUpdated();
        else if (this == PodcastsEpisodeArchived) onPodcastsEpisodeArchived();
        else if (this == PodcastsEpisodeDeleted) onPodcastsEpisodeDeleted();
        else if (this == PodcastsPrivateFeedActivated) onPodcastsPrivateFeedActivated();
        else otherwise(Value);
    }
}
