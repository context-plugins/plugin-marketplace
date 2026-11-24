using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// Customer status: churned when the customer is marked as churned, active otherwise.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomerStatus>))]
public sealed record CustomerStatus : OpenStringEnum<CustomerStatus>
{
    private CustomerStatus(string value) : base(value)
    {
    }

    public static readonly CustomerStatus Active = new("active");

    public static readonly CustomerStatus Churned = new("churned");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onChurned, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Churned => onChurned(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onChurned, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Churned) onChurned();
        else otherwise(Value);
    }
}
