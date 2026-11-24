using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomerPortalStatus>))]
public sealed record CustomerPortalStatus : OpenStringEnum<CustomerPortalStatus>
{
    private CustomerPortalStatus(string value) : base(value)
    {
    }

    public static readonly CustomerPortalStatus Active = new("active");

    public static readonly CustomerPortalStatus Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onExpired, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onExpired, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
