using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// status of the webhook.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusWebhooksApi>))]
public sealed record StatusWebhooksApi : OpenStringEnum<StatusWebhooksApi>
{
    private StatusWebhooksApi(string value) : base(value)
    {
    }

    public static readonly StatusWebhooksApi Active = new("active");

    public static readonly StatusWebhooksApi PendingApproval = new("pending-approval");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPendingApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == PendingApproval => onPendingApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPendingApproval, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == PendingApproval) onPendingApproval();
        else otherwise(Value);
    }
}
