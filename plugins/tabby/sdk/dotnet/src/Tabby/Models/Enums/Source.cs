using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// This field specifies author that led to the creation of the record. It can take one of the following values:
///   - <c>customer</c>: Indicates that the action was initiated by a customer;
///   - <c>merchant</c>: Indicates that the action was initiated by a merchant;
///   - <c>tabby-support</c>: Indicates that the action was initiated by Tabby support.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Customer = new("customer");

    public static readonly Source Merchant = new("merchant");

    public static readonly Source TabbySupport = new("tabby-support");

    public TResult Match<TResult>(Func<TResult> onCustomer,
        Func<TResult> onMerchant,
        Func<TResult> onTabbySupport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Customer => onCustomer(),
            _ when this == Merchant => onMerchant(),
            _ when this == TabbySupport => onTabbySupport(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomer, Action onMerchant, Action onTabbySupport, Action<string> otherwise)
    {
        if (this == Customer) onCustomer();
        else if (this == Merchant) onMerchant();
        else if (this == TabbySupport) onTabbySupport();
        else otherwise(Value);
    }
}
