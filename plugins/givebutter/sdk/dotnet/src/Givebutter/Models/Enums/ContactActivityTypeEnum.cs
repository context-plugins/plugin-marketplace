using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContactActivityTypeEnum>))]
public sealed record ContactActivityTypeEnum : OpenStringEnum<ContactActivityTypeEnum>
{
    private ContactActivityTypeEnum(string value) : base(value)
    {
    }

    public static readonly ContactActivityTypeEnum Archived = new("archived");

    public static readonly ContactActivityTypeEnum CampaignJoined = new("campaign.joined");

    public static readonly ContactActivityTypeEnum Email = new("email");

    public static readonly ContactActivityTypeEnum EmailSubscribed = new("email.subscribed");

    public static readonly ContactActivityTypeEnum EmailUnsubscribed = new("email.unsubscribed");

    public static readonly ContactActivityTypeEnum Letter = new("letter");

    public static readonly ContactActivityTypeEnum Meeting = new("meeting");

    public static readonly ContactActivityTypeEnum Note = new("note");

    public static readonly ContactActivityTypeEnum PhoneCall = new("phone_call");

    public static readonly ContactActivityTypeEnum RecurringPlanCanceled = new("recurring_plan.canceled");

    public static readonly ContactActivityTypeEnum RecurringPlanCreated = new("recurring_plan.created");

    public static readonly ContactActivityTypeEnum RecurringPlanActivated = new("recurring_plan.activated");

    public static readonly ContactActivityTypeEnum SignupFormSubmitted = new("signup_form.submitted");

    public static readonly ContactActivityTypeEnum Sms = new("sms");

    public static readonly ContactActivityTypeEnum SmsSubscribed = new("sms.subscribed");

    public static readonly ContactActivityTypeEnum SmsUnsubscribed = new("sms.unsubscribed");

    public static readonly ContactActivityTypeEnum SubscriptionFormSubmitted = new("subscription_form.submitted");

    public static readonly ContactActivityTypeEnum CompletedTask = new("completed_task");

    public static readonly ContactActivityTypeEnum CreatedTask = new("created_task");

    public static readonly ContactActivityTypeEnum TicketIssued = new("ticket.issued");

    public static readonly ContactActivityTypeEnum TransactionRecieved = new("transaction.recieved");

    public static readonly ContactActivityTypeEnum TransactionSucceeded = new("transaction.succeeded");

    public static readonly ContactActivityTypeEnum TransactionAcknowledged = new("transaction.acknowledged");

    public static readonly ContactActivityTypeEnum TransactionUnacknowledged = new("transaction.unacknowledged");

    public static readonly ContactActivityTypeEnum Unarchived = new("unarchived");

    public static readonly ContactActivityTypeEnum VolunteerActivity = new("volunteer_activity");

    public static readonly ContactActivityTypeEnum SoftCredited = new("soft_credited");

    public static readonly ContactActivityTypeEnum Tagged = new("tagged");

    public static readonly ContactActivityTypeEnum Untagged = new("untagged");

    public static readonly ContactActivityTypeEnum CustomFieldUpdated = new("custom_field.updated");

    public static readonly ContactActivityTypeEnum VideoMessageSent = new("video_message.sent");

    public static readonly ContactActivityTypeEnum VideoMessageDeleted = new("video_message.deleted");

    public TResult Match<TResult>(Func<TResult> onArchived,
        Func<TResult> onCampaignJoined,
        Func<TResult> onEmail,
        Func<TResult> onEmailSubscribed,
        Func<TResult> onEmailUnsubscribed,
        Func<TResult> onLetter,
        Func<TResult> onMeeting,
        Func<TResult> onNote,
        Func<TResult> onPhoneCall,
        Func<TResult> onRecurringPlanCanceled,
        Func<TResult> onRecurringPlanCreated,
        Func<TResult> onRecurringPlanActivated,
        Func<TResult> onSignupFormSubmitted,
        Func<TResult> onSms,
        Func<TResult> onSmsSubscribed,
        Func<TResult> onSmsUnsubscribed,
        Func<TResult> onSubscriptionFormSubmitted,
        Func<TResult> onCompletedTask,
        Func<TResult> onCreatedTask,
        Func<TResult> onTicketIssued,
        Func<TResult> onTransactionRecieved,
        Func<TResult> onTransactionSucceeded,
        Func<TResult> onTransactionAcknowledged,
        Func<TResult> onTransactionUnacknowledged,
        Func<TResult> onUnarchived,
        Func<TResult> onVolunteerActivity,
        Func<TResult> onSoftCredited,
        Func<TResult> onTagged,
        Func<TResult> onUntagged,
        Func<TResult> onCustomFieldUpdated,
        Func<TResult> onVideoMessageSent,
        Func<TResult> onVideoMessageDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Archived => onArchived(),
            _ when this == CampaignJoined => onCampaignJoined(),
            _ when this == Email => onEmail(),
            _ when this == EmailSubscribed => onEmailSubscribed(),
            _ when this == EmailUnsubscribed => onEmailUnsubscribed(),
            _ when this == Letter => onLetter(),
            _ when this == Meeting => onMeeting(),
            _ when this == Note => onNote(),
            _ when this == PhoneCall => onPhoneCall(),
            _ when this == RecurringPlanCanceled => onRecurringPlanCanceled(),
            _ when this == RecurringPlanCreated => onRecurringPlanCreated(),
            _ when this == RecurringPlanActivated => onRecurringPlanActivated(),
            _ when this == SignupFormSubmitted => onSignupFormSubmitted(),
            _ when this == Sms => onSms(),
            _ when this == SmsSubscribed => onSmsSubscribed(),
            _ when this == SmsUnsubscribed => onSmsUnsubscribed(),
            _ when this == SubscriptionFormSubmitted => onSubscriptionFormSubmitted(),
            _ when this == CompletedTask => onCompletedTask(),
            _ when this == CreatedTask => onCreatedTask(),
            _ when this == TicketIssued => onTicketIssued(),
            _ when this == TransactionRecieved => onTransactionRecieved(),
            _ when this == TransactionSucceeded => onTransactionSucceeded(),
            _ when this == TransactionAcknowledged => onTransactionAcknowledged(),
            _ when this == TransactionUnacknowledged => onTransactionUnacknowledged(),
            _ when this == Unarchived => onUnarchived(),
            _ when this == VolunteerActivity => onVolunteerActivity(),
            _ when this == SoftCredited => onSoftCredited(),
            _ when this == Tagged => onTagged(),
            _ when this == Untagged => onUntagged(),
            _ when this == CustomFieldUpdated => onCustomFieldUpdated(),
            _ when this == VideoMessageSent => onVideoMessageSent(),
            _ when this == VideoMessageDeleted => onVideoMessageDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onArchived,
        Action onCampaignJoined,
        Action onEmail,
        Action onEmailSubscribed,
        Action onEmailUnsubscribed,
        Action onLetter,
        Action onMeeting,
        Action onNote,
        Action onPhoneCall,
        Action onRecurringPlanCanceled,
        Action onRecurringPlanCreated,
        Action onRecurringPlanActivated,
        Action onSignupFormSubmitted,
        Action onSms,
        Action onSmsSubscribed,
        Action onSmsUnsubscribed,
        Action onSubscriptionFormSubmitted,
        Action onCompletedTask,
        Action onCreatedTask,
        Action onTicketIssued,
        Action onTransactionRecieved,
        Action onTransactionSucceeded,
        Action onTransactionAcknowledged,
        Action onTransactionUnacknowledged,
        Action onUnarchived,
        Action onVolunteerActivity,
        Action onSoftCredited,
        Action onTagged,
        Action onUntagged,
        Action onCustomFieldUpdated,
        Action onVideoMessageSent,
        Action onVideoMessageDeleted,
        Action<string> otherwise)
    {
        if (this == Archived) onArchived();
        else if (this == CampaignJoined) onCampaignJoined();
        else if (this == Email) onEmail();
        else if (this == EmailSubscribed) onEmailSubscribed();
        else if (this == EmailUnsubscribed) onEmailUnsubscribed();
        else if (this == Letter) onLetter();
        else if (this == Meeting) onMeeting();
        else if (this == Note) onNote();
        else if (this == PhoneCall) onPhoneCall();
        else if (this == RecurringPlanCanceled) onRecurringPlanCanceled();
        else if (this == RecurringPlanCreated) onRecurringPlanCreated();
        else if (this == RecurringPlanActivated) onRecurringPlanActivated();
        else if (this == SignupFormSubmitted) onSignupFormSubmitted();
        else if (this == Sms) onSms();
        else if (this == SmsSubscribed) onSmsSubscribed();
        else if (this == SmsUnsubscribed) onSmsUnsubscribed();
        else if (this == SubscriptionFormSubmitted) onSubscriptionFormSubmitted();
        else if (this == CompletedTask) onCompletedTask();
        else if (this == CreatedTask) onCreatedTask();
        else if (this == TicketIssued) onTicketIssued();
        else if (this == TransactionRecieved) onTransactionRecieved();
        else if (this == TransactionSucceeded) onTransactionSucceeded();
        else if (this == TransactionAcknowledged) onTransactionAcknowledged();
        else if (this == TransactionUnacknowledged) onTransactionUnacknowledged();
        else if (this == Unarchived) onUnarchived();
        else if (this == VolunteerActivity) onVolunteerActivity();
        else if (this == SoftCredited) onSoftCredited();
        else if (this == Tagged) onTagged();
        else if (this == Untagged) onUntagged();
        else if (this == CustomFieldUpdated) onCustomFieldUpdated();
        else if (this == VideoMessageSent) onVideoMessageSent();
        else if (this == VideoMessageDeleted) onVideoMessageDeleted();
        else otherwise(Value);
    }
}
