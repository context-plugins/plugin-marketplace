using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

/// <summary>
/// Default lead, or purchase when only a url or domain is given.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContextJidScreenApi>))]
public sealed record ContextJidScreenApi : OpenStringEnum<ContextJidScreenApi>
{
    private ContextJidScreenApi(string value) : base(value)
    {
    }

    public static readonly ContextJidScreenApi Lead = new("lead");

    public static readonly ContextJidScreenApi InboundEmail = new("inbound_email");

    public static readonly ContextJidScreenApi Partnership = new("partnership");

    public static readonly ContextJidScreenApi Vendor = new("vendor");

    public static readonly ContextJidScreenApi Purchase = new("purchase");

    public static readonly ContextJidScreenApi MarketplaceSeller = new("marketplace_seller");

    public static readonly ContextJidScreenApi AgentAction = new("agent_action");

    public TResult Match<TResult>(Func<TResult> onLead,
        Func<TResult> onInboundEmail,
        Func<TResult> onPartnership,
        Func<TResult> onVendor,
        Func<TResult> onPurchase,
        Func<TResult> onMarketplaceSeller,
        Func<TResult> onAgentAction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Lead => onLead(),
            _ when this == InboundEmail => onInboundEmail(),
            _ when this == Partnership => onPartnership(),
            _ when this == Vendor => onVendor(),
            _ when this == Purchase => onPurchase(),
            _ when this == MarketplaceSeller => onMarketplaceSeller(),
            _ when this == AgentAction => onAgentAction(),
            _ => otherwise(Value)
        };

    public void Match(Action onLead,
        Action onInboundEmail,
        Action onPartnership,
        Action onVendor,
        Action onPurchase,
        Action onMarketplaceSeller,
        Action onAgentAction,
        Action<string> otherwise)
    {
        if (this == Lead) onLead();
        else if (this == InboundEmail) onInboundEmail();
        else if (this == Partnership) onPartnership();
        else if (this == Vendor) onVendor();
        else if (this == Purchase) onPurchase();
        else if (this == MarketplaceSeller) onMarketplaceSeller();
        else if (this == AgentAction) onAgentAction();
        else otherwise(Value);
    }
}
