using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomerUserStatus>))]
public sealed record CustomerUserStatus : OpenStringEnum<CustomerUserStatus>
{
    private CustomerUserStatus(string value) : base(value)
    {
    }

    public static readonly CustomerUserStatus Active = new("active");

    public static readonly CustomerUserStatus Deactivated = new("deactivated");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onDeactivated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deactivated => onDeactivated(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeactivated, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deactivated) onDeactivated();
        else otherwise(Value);
    }
}
