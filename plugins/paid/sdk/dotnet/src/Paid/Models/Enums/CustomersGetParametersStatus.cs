using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomersGetParametersStatus>))]
public sealed record CustomersGetParametersStatus : OpenStringEnum<CustomersGetParametersStatus>
{
    private CustomersGetParametersStatus(string value) : base(value)
    {
    }

    public static readonly CustomersGetParametersStatus Active = new("active");

    public static readonly CustomersGetParametersStatus Churned = new("churned");

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
