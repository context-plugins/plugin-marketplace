using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Why report is null: nonpersist (team keeps no data), disabled (AI detector history off), text_not_retained (history keeps no text), unconfirmed_email, quota (history full), unscorable, error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReportSkipReason>))]
public sealed record ReportSkipReason : OpenStringEnum<ReportSkipReason>
{
    private ReportSkipReason(string value) : base(value)
    {
    }

    public static readonly ReportSkipReason Nonpersist = new("nonpersist");

    public static readonly ReportSkipReason Disabled = new("disabled");

    public static readonly ReportSkipReason TextNotRetained = new("text_not_retained");

    public static readonly ReportSkipReason UnconfirmedEmail = new("unconfirmed_email");

    public static readonly ReportSkipReason Quota = new("quota");

    public static readonly ReportSkipReason Unscorable = new("unscorable");

    public static readonly ReportSkipReason Error = new("error");

    public TResult Match<TResult>(Func<TResult> onNonpersist,
        Func<TResult> onDisabled,
        Func<TResult> onTextNotRetained,
        Func<TResult> onUnconfirmedEmail,
        Func<TResult> onQuota,
        Func<TResult> onUnscorable,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Nonpersist => onNonpersist(),
            _ when this == Disabled => onDisabled(),
            _ when this == TextNotRetained => onTextNotRetained(),
            _ when this == UnconfirmedEmail => onUnconfirmedEmail(),
            _ when this == Quota => onQuota(),
            _ when this == Unscorable => onUnscorable(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNonpersist,
        Action onDisabled,
        Action onTextNotRetained,
        Action onUnconfirmedEmail,
        Action onQuota,
        Action onUnscorable,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Nonpersist) onNonpersist();
        else if (this == Disabled) onDisabled();
        else if (this == TextNotRetained) onTextNotRetained();
        else if (this == UnconfirmedEmail) onUnconfirmedEmail();
        else if (this == Quota) onQuota();
        else if (this == Unscorable) onUnscorable();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
