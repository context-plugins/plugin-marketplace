using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceType>))]
public sealed record ResourceType : OpenStringEnum<ResourceType>
{
    private ResourceType(string value) : base(value)
    {
    }

    public static readonly ResourceType ChangeHistoryResourceTypeUnspecified = new(
        "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED");

    public static readonly ResourceType Account = new("ACCOUNT");

    public static readonly ResourceType Property = new("PROPERTY");

    public static readonly ResourceType FirebaseLink = new("FIREBASE_LINK");

    public static readonly ResourceType GoogleAdsLink = new("GOOGLE_ADS_LINK");

    public static readonly ResourceType GoogleSignalsSettings = new("GOOGLE_SIGNALS_SETTINGS");

    public static readonly ResourceType ConversionEvent = new("CONVERSION_EVENT");

    public static readonly ResourceType MeasurementProtocolSecret = new("MEASUREMENT_PROTOCOL_SECRET");

    public static readonly ResourceType CustomDimension = new("CUSTOM_DIMENSION");

    public static readonly ResourceType CustomMetric = new("CUSTOM_METRIC");

    public static readonly ResourceType DataRetentionSettings = new("DATA_RETENTION_SETTINGS");

    public static readonly ResourceType DisplayVideo360AdvertiserLink = new("DISPLAY_VIDEO_360_ADVERTISER_LINK");

    public static readonly ResourceType DisplayVideo360AdvertiserLinkProposal = new(
        "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL");

    public static readonly ResourceType DataStream = new("DATA_STREAM");

    public static readonly ResourceType AttributionSettings = new("ATTRIBUTION_SETTINGS");

    public TResult Match<TResult>(Func<TResult> onChangeHistoryResourceTypeUnspecified,
        Func<TResult> onAccount,
        Func<TResult> onProperty,
        Func<TResult> onFirebaseLink,
        Func<TResult> onGoogleAdsLink,
        Func<TResult> onGoogleSignalsSettings,
        Func<TResult> onConversionEvent,
        Func<TResult> onMeasurementProtocolSecret,
        Func<TResult> onCustomDimension,
        Func<TResult> onCustomMetric,
        Func<TResult> onDataRetentionSettings,
        Func<TResult> onDisplayVideo360AdvertiserLink,
        Func<TResult> onDisplayVideo360AdvertiserLinkProposal,
        Func<TResult> onDataStream,
        Func<TResult> onAttributionSettings,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ChangeHistoryResourceTypeUnspecified => onChangeHistoryResourceTypeUnspecified(),
            _ when this == Account => onAccount(),
            _ when this == Property => onProperty(),
            _ when this == FirebaseLink => onFirebaseLink(),
            _ when this == GoogleAdsLink => onGoogleAdsLink(),
            _ when this == GoogleSignalsSettings => onGoogleSignalsSettings(),
            _ when this == ConversionEvent => onConversionEvent(),
            _ when this == MeasurementProtocolSecret => onMeasurementProtocolSecret(),
            _ when this == CustomDimension => onCustomDimension(),
            _ when this == CustomMetric => onCustomMetric(),
            _ when this == DataRetentionSettings => onDataRetentionSettings(),
            _ when this == DisplayVideo360AdvertiserLink => onDisplayVideo360AdvertiserLink(),
            _ when this == DisplayVideo360AdvertiserLinkProposal => onDisplayVideo360AdvertiserLinkProposal(),
            _ when this == DataStream => onDataStream(),
            _ when this == AttributionSettings => onAttributionSettings(),
            _ => otherwise(Value)
        };

    public void Match(Action onChangeHistoryResourceTypeUnspecified,
        Action onAccount,
        Action onProperty,
        Action onFirebaseLink,
        Action onGoogleAdsLink,
        Action onGoogleSignalsSettings,
        Action onConversionEvent,
        Action onMeasurementProtocolSecret,
        Action onCustomDimension,
        Action onCustomMetric,
        Action onDataRetentionSettings,
        Action onDisplayVideo360AdvertiserLink,
        Action onDisplayVideo360AdvertiserLinkProposal,
        Action onDataStream,
        Action onAttributionSettings,
        Action<string> otherwise)
    {
        if (this == ChangeHistoryResourceTypeUnspecified) onChangeHistoryResourceTypeUnspecified();
        else if (this == Account) onAccount();
        else if (this == Property) onProperty();
        else if (this == FirebaseLink) onFirebaseLink();
        else if (this == GoogleAdsLink) onGoogleAdsLink();
        else if (this == GoogleSignalsSettings) onGoogleSignalsSettings();
        else if (this == ConversionEvent) onConversionEvent();
        else if (this == MeasurementProtocolSecret) onMeasurementProtocolSecret();
        else if (this == CustomDimension) onCustomDimension();
        else if (this == CustomMetric) onCustomMetric();
        else if (this == DataRetentionSettings) onDataRetentionSettings();
        else if (this == DisplayVideo360AdvertiserLink) onDisplayVideo360AdvertiserLink();
        else if (this == DisplayVideo360AdvertiserLinkProposal) onDisplayVideo360AdvertiserLinkProposal();
        else if (this == DataStream) onDataStream();
        else if (this == AttributionSettings) onAttributionSettings();
        else otherwise(Value);
    }
}
