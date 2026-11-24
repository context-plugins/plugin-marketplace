using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The current status of the item during shopping.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1InstacartConnectPostCheckoutOrdersApi>))]
public sealed record Status1InstacartConnectPostCheckoutOrdersApi : OpenStringEnum<Status1InstacartConnectPostCheckoutOrdersApi>
{
    private Status1InstacartConnectPostCheckoutOrdersApi(string value) : base(value)
    {
    }

    public static readonly Status1InstacartConnectPostCheckoutOrdersApi Pending = new("pending");

    public static readonly Status1InstacartConnectPostCheckoutOrdersApi Found = new("found");

    public static readonly Status1InstacartConnectPostCheckoutOrdersApi Replaced = new("replaced");

    public static readonly Status1InstacartConnectPostCheckoutOrdersApi Refunded = new("refunded");

    public static readonly Status1InstacartConnectPostCheckoutOrdersApi NotFound = new("not_found");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFound,
        Func<TResult> onReplaced,
        Func<TResult> onRefunded,
        Func<TResult> onNotFound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Found => onFound(),
            _ when this == Replaced => onReplaced(),
            _ when this == Refunded => onRefunded(),
            _ when this == NotFound => onNotFound(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFound,
        Action onReplaced,
        Action onRefunded,
        Action onNotFound,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Found) onFound();
        else if (this == Replaced) onReplaced();
        else if (this == Refunded) onRefunded();
        else if (this == NotFound) onNotFound();
        else otherwise(Value);
    }
}
