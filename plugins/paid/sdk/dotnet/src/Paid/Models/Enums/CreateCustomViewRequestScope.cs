using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// 'customer' (default): data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide; the view is internal-only (visible to org members in Paid, never embeddable).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreateCustomViewRequestScope>))]
public sealed record CreateCustomViewRequestScope : OpenStringEnum<CreateCustomViewRequestScope>
{
    private CreateCustomViewRequestScope(string value) : base(value)
    {
    }

    public static readonly CreateCustomViewRequestScope Customer = new("customer");

    public static readonly CreateCustomViewRequestScope Organization = new("organization");

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
