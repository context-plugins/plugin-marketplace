using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Macro;

/// <summary>
/// The inputs of the GlobalMacroMacroGet operation.
/// </summary>
public sealed record GlobalMacroMacroGetRequest
{
    /// <summary>
    /// ISO code (US, GB, DE, IN, BR, JP, CN) or country name
    /// </summary>
    public string Country { get; init; } = "";

    /// <summary>
    /// gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports | current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
    /// </summary>
    public string Indicator { get; init; } = "all";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
