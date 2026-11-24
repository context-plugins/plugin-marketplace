using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event CampaignCreated = new("campaign.created");

    public static readonly Event CampaignUpdated = new("campaign.updated");

    public static readonly Event TicketCreated = new("ticket.created");

    public static readonly Event TransactionSucceeded = new("transaction.succeeded");

    public static readonly Event ContactCreated = new("contact.created");

    public static readonly Event PlanCanceled = new("plan.canceled");

    public static readonly Event PlanCreated = new("plan.created");

    public static readonly Event PlanFailed = new("plan.failed");

    public static readonly Event PlanPaused = new("plan.paused");

    public static readonly Event PlanResumed = new("plan.resumed");

    public static readonly Event PlanUpdated = new("plan.updated");

    public static readonly Event RefundCreated = new("refund.created");

    public TResult Match<TResult>(Func<TResult> onCampaignCreated,
        Func<TResult> onCampaignUpdated,
        Func<TResult> onTicketCreated,
        Func<TResult> onTransactionSucceeded,
        Func<TResult> onContactCreated,
        Func<TResult> onPlanCanceled,
        Func<TResult> onPlanCreated,
        Func<TResult> onPlanFailed,
        Func<TResult> onPlanPaused,
        Func<TResult> onPlanResumed,
        Func<TResult> onPlanUpdated,
        Func<TResult> onRefundCreated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CampaignCreated => onCampaignCreated(),
            _ when this == CampaignUpdated => onCampaignUpdated(),
            _ when this == TicketCreated => onTicketCreated(),
            _ when this == TransactionSucceeded => onTransactionSucceeded(),
            _ when this == ContactCreated => onContactCreated(),
            _ when this == PlanCanceled => onPlanCanceled(),
            _ when this == PlanCreated => onPlanCreated(),
            _ when this == PlanFailed => onPlanFailed(),
            _ when this == PlanPaused => onPlanPaused(),
            _ when this == PlanResumed => onPlanResumed(),
            _ when this == PlanUpdated => onPlanUpdated(),
            _ when this == RefundCreated => onRefundCreated(),
            _ => otherwise(Value)
        };

    public void Match(Action onCampaignCreated,
        Action onCampaignUpdated,
        Action onTicketCreated,
        Action onTransactionSucceeded,
        Action onContactCreated,
        Action onPlanCanceled,
        Action onPlanCreated,
        Action onPlanFailed,
        Action onPlanPaused,
        Action onPlanResumed,
        Action onPlanUpdated,
        Action onRefundCreated,
        Action<string> otherwise)
    {
        if (this == CampaignCreated) onCampaignCreated();
        else if (this == CampaignUpdated) onCampaignUpdated();
        else if (this == TicketCreated) onTicketCreated();
        else if (this == TransactionSucceeded) onTransactionSucceeded();
        else if (this == ContactCreated) onContactCreated();
        else if (this == PlanCanceled) onPlanCanceled();
        else if (this == PlanCreated) onPlanCreated();
        else if (this == PlanFailed) onPlanFailed();
        else if (this == PlanPaused) onPlanPaused();
        else if (this == PlanResumed) onPlanResumed();
        else if (this == PlanUpdated) onPlanUpdated();
        else if (this == RefundCreated) onRefundCreated();
        else otherwise(Value);
    }
}
