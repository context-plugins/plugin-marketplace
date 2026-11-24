using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Stable machine-readable reason a send was dropped or failed. Branch on this
/// value; the wording of <c>reason</c> may change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SendStatusReasonCode>))]
public sealed record SendStatusReasonCode : OpenStringEnum<SendStatusReasonCode>
{
    private SendStatusReasonCode(string value) : base(value)
    {
    }

    public static readonly SendStatusReasonCode SuppressionList = new("suppression_list");

    public static readonly SendStatusReasonCode RoleBasedAddressSuppression = new("role_based_address_suppression");

    public static readonly SendStatusReasonCode SuspiciousDomainSuppression = new("suspicious_domain_suppression");

    public static readonly SendStatusReasonCode FrequencyCap = new("frequency_cap");

    public static readonly SendStatusReasonCode QuietHours = new("quiet_hours");

    public static readonly SendStatusReasonCode MissingChannelData = new("missing_channel_data");

    public static readonly SendStatusReasonCode NoLocale = new("no_locale");

    public static readonly SendStatusReasonCode Unsubscribed = new("unsubscribed");

    public static readonly SendStatusReasonCode RenderError = new("render_error");

    public static readonly SendStatusReasonCode Other = new("other");

    public static readonly SendStatusReasonCode SendFailed = new("send_failed");

    public static readonly SendStatusReasonCode DeliveryFailed = new("delivery_failed");

    public TResult Match<TResult>(Func<TResult> onSuppressionList,
        Func<TResult> onRoleBasedAddressSuppression,
        Func<TResult> onSuspiciousDomainSuppression,
        Func<TResult> onFrequencyCap,
        Func<TResult> onQuietHours,
        Func<TResult> onMissingChannelData,
        Func<TResult> onNoLocale,
        Func<TResult> onUnsubscribed,
        Func<TResult> onRenderError,
        Func<TResult> onOther,
        Func<TResult> onSendFailed,
        Func<TResult> onDeliveryFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SuppressionList => onSuppressionList(),
            _ when this == RoleBasedAddressSuppression => onRoleBasedAddressSuppression(),
            _ when this == SuspiciousDomainSuppression => onSuspiciousDomainSuppression(),
            _ when this == FrequencyCap => onFrequencyCap(),
            _ when this == QuietHours => onQuietHours(),
            _ when this == MissingChannelData => onMissingChannelData(),
            _ when this == NoLocale => onNoLocale(),
            _ when this == Unsubscribed => onUnsubscribed(),
            _ when this == RenderError => onRenderError(),
            _ when this == Other => onOther(),
            _ when this == SendFailed => onSendFailed(),
            _ when this == DeliveryFailed => onDeliveryFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuppressionList,
        Action onRoleBasedAddressSuppression,
        Action onSuspiciousDomainSuppression,
        Action onFrequencyCap,
        Action onQuietHours,
        Action onMissingChannelData,
        Action onNoLocale,
        Action onUnsubscribed,
        Action onRenderError,
        Action onOther,
        Action onSendFailed,
        Action onDeliveryFailed,
        Action<string> otherwise)
    {
        if (this == SuppressionList) onSuppressionList();
        else if (this == RoleBasedAddressSuppression) onRoleBasedAddressSuppression();
        else if (this == SuspiciousDomainSuppression) onSuspiciousDomainSuppression();
        else if (this == FrequencyCap) onFrequencyCap();
        else if (this == QuietHours) onQuietHours();
        else if (this == MissingChannelData) onMissingChannelData();
        else if (this == NoLocale) onNoLocale();
        else if (this == Unsubscribed) onUnsubscribed();
        else if (this == RenderError) onRenderError();
        else if (this == Other) onOther();
        else if (this == SendFailed) onSendFailed();
        else if (this == DeliveryFailed) onDeliveryFailed();
        else otherwise(Value);
    }
}
