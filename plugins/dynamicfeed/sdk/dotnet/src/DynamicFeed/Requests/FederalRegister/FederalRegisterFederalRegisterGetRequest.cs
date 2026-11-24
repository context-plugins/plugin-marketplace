using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.FederalRegister;

/// <summary>
/// The inputs of the FederalRegisterFederalRegisterGet operation.
/// </summary>
public sealed record FederalRegisterFederalRegisterGetRequest
{
    /// <summary>
    /// text search
    /// </summary>
    public string Query { get; init; } = "";

    /// <summary>
    /// RULE | PRORULE | NOTICE | PRESDOCU
    /// </summary>
    public string DocType { get; init; } = "";

    /// <summary>
    /// agency slug, e.g. securities-and-exchange-commission
    /// </summary>
    public string Agency { get; init; } = "";

    [Minimum(1)]
    [Maximum(90)]
    public int Days { get; init; } = 7;

    [Maximum(100)]
    public int Limit { get; init; } = 20;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
