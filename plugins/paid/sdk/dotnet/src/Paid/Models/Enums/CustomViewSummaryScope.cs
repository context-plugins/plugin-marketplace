using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// 'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide and the view is internal-only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomViewSummaryScope>))]
public sealed record CustomViewSummaryScope : OpenStringEnum<CustomViewSummaryScope>
{
    private CustomViewSummaryScope(string value) : base(value)
    {
    }

    public static readonly CustomViewSummaryScope Customer = new("customer");

    public static readonly CustomViewSummaryScope Organization = new("organization");

    public TResult Match<TResult>(Func<TResult> onCustomer,
        Func<TResult> onOrganization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Customer => onCustomer(),
            _ when this == Organization => onOrganization(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomer, Action onOrganization, Action<string> otherwise)
    {
        if (this == Customer) onCustomer();
        else if (this == Organization) onOrganization();
        else otherwise(Value);
    }
}
