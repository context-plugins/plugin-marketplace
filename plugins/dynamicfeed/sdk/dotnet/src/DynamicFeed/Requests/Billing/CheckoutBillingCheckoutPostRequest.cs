namespace DynamicFeed.Requests.Billing;

/// <summary>
/// The inputs of the CheckoutBillingCheckoutPost operation.
/// </summary>
public sealed record CheckoutBillingCheckoutPostRequest
{
    /// <summary>
    /// the key you want to upgrade
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)
    /// </summary>
    public string Tier { get; init; } = "pro";

    /// <summary>
    /// 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)
    /// </summary>
    public string Interval { get; init; } = "month";
}
