using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the type for a reimbursement in the Spend API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReimbursementType>))]
public sealed record ReimbursementType : OpenStringEnum<ReimbursementType>
{
    private ReimbursementType(string value) : base(value)
    {
    }

    public static readonly ReimbursementType Purchase = new("PURCHASE");

    public static readonly ReimbursementType Mileage = new("MILEAGE");

    public TResult Match<TResult>(Func<TResult> onPurchase, Func<TResult> onMileage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Purchase => onPurchase(),
            _ when this == Mileage => onMileage(),
            _ => otherwise(Value)
        };

    public void Match(Action onPurchase, Action onMileage, Action<string> otherwise)
    {
        if (this == Purchase) onPurchase();
        else if (this == Mileage) onMileage();
        else otherwise(Value);
    }
}
