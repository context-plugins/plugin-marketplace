using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AutomationTriggerEvent>))]
public sealed record AutomationTriggerEvent : OpenStringEnum<AutomationTriggerEvent>
{
    private AutomationTriggerEvent(string value) : base(value)
    {
    }

    public static readonly AutomationTriggerEvent Api = new("api");

    public static readonly AutomationTriggerEvent Downgrade = new("downgrade");

    public static readonly AutomationTriggerEvent EmailSubmission = new("email_submission");

    public static readonly AutomationTriggerEvent FormSubmission = new("form_submission");

    public static readonly AutomationTriggerEvent Manual = new("manual");

    public static readonly AutomationTriggerEvent PollSubmission = new("poll_submission");

    public static readonly AutomationTriggerEvent PurchasedProduct = new("purchased_product");

    public static readonly AutomationTriggerEvent ReferralAction = new("referral_action");

    public static readonly AutomationTriggerEvent SegmentAction = new("segment_action");

    public static readonly AutomationTriggerEvent Signup = new("signup");

    public static readonly AutomationTriggerEvent Unengaged = new("unengaged");

    public static readonly AutomationTriggerEvent Upgrade = new("upgrade");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onDowngrade,
        Func<TResult> onEmailSubmission,
        Func<TResult> onFormSubmission,
        Func<TResult> onManual,
        Func<TResult> onPollSubmission,
        Func<TResult> onPurchasedProduct,
        Func<TResult> onReferralAction,
        Func<TResult> onSegmentAction,
        Func<TResult> onSignup,
        Func<TResult> onUnengaged,
        Func<TResult> onUpgrade,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Downgrade => onDowngrade(),
            _ when this == EmailSubmission => onEmailSubmission(),
            _ when this == FormSubmission => onFormSubmission(),
            _ when this == Manual => onManual(),
            _ when this == PollSubmission => onPollSubmission(),
            _ when this == PurchasedProduct => onPurchasedProduct(),
            _ when this == ReferralAction => onReferralAction(),
            _ when this == SegmentAction => onSegmentAction(),
            _ when this == Signup => onSignup(),
            _ when this == Unengaged => onUnengaged(),
            _ when this == Upgrade => onUpgrade(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi,
        Action onDowngrade,
        Action onEmailSubmission,
        Action onFormSubmission,
        Action onManual,
        Action onPollSubmission,
        Action onPurchasedProduct,
        Action onReferralAction,
        Action onSegmentAction,
        Action onSignup,
        Action onUnengaged,
        Action onUpgrade,
        Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Downgrade) onDowngrade();
        else if (this == EmailSubmission) onEmailSubmission();
        else if (this == FormSubmission) onFormSubmission();
        else if (this == Manual) onManual();
        else if (this == PollSubmission) onPollSubmission();
        else if (this == PurchasedProduct) onPurchasedProduct();
        else if (this == ReferralAction) onReferralAction();
        else if (this == SegmentAction) onSegmentAction();
        else if (this == Signup) onSignup();
        else if (this == Unengaged) onUnengaged();
        else if (this == Upgrade) onUpgrade();
        else otherwise(Value);
    }
}
