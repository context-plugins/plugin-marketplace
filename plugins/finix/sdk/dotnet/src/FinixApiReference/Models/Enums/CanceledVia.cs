using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// If the subscription was canceled, this field shows how the cancellation was initiated.
/// <para>
/// Possible values:
/// </para>
/// <list type="bullet">
///   <item><description><c>MERCHANT</c> - The customer (merchant) canceled the subscription themselves. The <c>linked_to</c> field indicates the related <c>Merchant</c>.</description></item>
///   <item><description><c>AUTOMATED_OVERDUE</c> - The subscription was canceled by the overdue system.</description></item>
///   <item><description><c>SUPPORT</c> - The subscription was canceled by Finix Support.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CanceledVia>))]
public sealed record CanceledVia : OpenStringEnum<CanceledVia>
{
    private CanceledVia(string value) : base(value)
    {
    }

    public static readonly CanceledVia Merchant = new("MERCHANT");

    public static readonly CanceledVia AutomatedOverdue = new("AUTOMATED_OVERDUE");

    public static readonly CanceledVia Support = new("SUPPORT");

    public TResult Match<TResult>(Func<TResult> onMerchant,
        Func<TResult> onAutomatedOverdue,
        Func<TResult> onSupport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Merchant => onMerchant(),
            _ when this == AutomatedOverdue => onAutomatedOverdue(),
            _ when this == Support => onSupport(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchant, Action onAutomatedOverdue, Action onSupport, Action<string> otherwise)
    {
        if (this == Merchant) onMerchant();
        else if (this == AutomatedOverdue) onAutomatedOverdue();
        else if (this == Support) onSupport();
        else otherwise(Value);
    }
}
