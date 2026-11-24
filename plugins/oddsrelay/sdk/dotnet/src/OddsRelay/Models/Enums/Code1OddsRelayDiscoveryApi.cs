using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code1OddsRelayDiscoveryApi>))]
public sealed record Code1OddsRelayDiscoveryApi : OpenStringEnum<Code1OddsRelayDiscoveryApi>
{
    private Code1OddsRelayDiscoveryApi(string value) : base(value)
    {
    }

    public static readonly Code1OddsRelayDiscoveryApi AccountSuspended = new("account_suspended");

    public static readonly Code1OddsRelayDiscoveryApi NotInKeyScope = new("not_in_key_scope");

    public static readonly Code1OddsRelayDiscoveryApi ProductNotInRegion = new("product_not_in_region");

    public static readonly Code1OddsRelayDiscoveryApi OriginNotAllowed = new("origin_not_allowed");

    public static readonly Code1OddsRelayDiscoveryApi RegionNotInScope = new("region_not_in_scope");

    public static readonly Code1OddsRelayDiscoveryApi BookmakerNotInRegion = new("bookmaker_not_in_region");

    public static readonly Code1OddsRelayDiscoveryApi BookmakerNotInPlan = new("bookmaker_not_in_plan");

    public static readonly Code1OddsRelayDiscoveryApi SportNotInPlan = new("sport_not_in_plan");

    public static readonly Code1OddsRelayDiscoveryApi MarketNotInPlan = new("market_not_in_plan");

    public static readonly Code1OddsRelayDiscoveryApi ExchangeNotInPlan = new("exchange_not_in_plan");

    public static readonly Code1OddsRelayDiscoveryApi SchemaNotInScope = new("schema_not_in_scope");

    public TResult Match<TResult>(Func<TResult> onAccountSuspended,
        Func<TResult> onNotInKeyScope,
        Func<TResult> onProductNotInRegion,
        Func<TResult> onOriginNotAllowed,
        Func<TResult> onRegionNotInScope,
        Func<TResult> onBookmakerNotInRegion,
        Func<TResult> onBookmakerNotInPlan,
        Func<TResult> onSportNotInPlan,
        Func<TResult> onMarketNotInPlan,
        Func<TResult> onExchangeNotInPlan,
        Func<TResult> onSchemaNotInScope,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccountSuspended => onAccountSuspended(),
            _ when this == NotInKeyScope => onNotInKeyScope(),
            _ when this == ProductNotInRegion => onProductNotInRegion(),
            _ when this == OriginNotAllowed => onOriginNotAllowed(),
            _ when this == RegionNotInScope => onRegionNotInScope(),
            _ when this == BookmakerNotInRegion => onBookmakerNotInRegion(),
            _ when this == BookmakerNotInPlan => onBookmakerNotInPlan(),
            _ when this == SportNotInPlan => onSportNotInPlan(),
            _ when this == MarketNotInPlan => onMarketNotInPlan(),
            _ when this == ExchangeNotInPlan => onExchangeNotInPlan(),
            _ when this == SchemaNotInScope => onSchemaNotInScope(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccountSuspended,
        Action onNotInKeyScope,
        Action onProductNotInRegion,
        Action onOriginNotAllowed,
        Action onRegionNotInScope,
        Action onBookmakerNotInRegion,
        Action onBookmakerNotInPlan,
        Action onSportNotInPlan,
        Action onMarketNotInPlan,
        Action onExchangeNotInPlan,
        Action onSchemaNotInScope,
        Action<string> otherwise)
    {
        if (this == AccountSuspended) onAccountSuspended();
        else if (this == NotInKeyScope) onNotInKeyScope();
        else if (this == ProductNotInRegion) onProductNotInRegion();
        else if (this == OriginNotAllowed) onOriginNotAllowed();
        else if (this == RegionNotInScope) onRegionNotInScope();
        else if (this == BookmakerNotInRegion) onBookmakerNotInRegion();
        else if (this == BookmakerNotInPlan) onBookmakerNotInPlan();
        else if (this == SportNotInPlan) onSportNotInPlan();
        else if (this == MarketNotInPlan) onMarketNotInPlan();
        else if (this == ExchangeNotInPlan) onExchangeNotInPlan();
        else if (this == SchemaNotInScope) onSchemaNotInScope();
        else otherwise(Value);
    }
}
