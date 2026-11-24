using Zillapi.Core.Validation;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the GetPropertyByUrl operation.
/// </summary>
public sealed record GetPropertyByUrlRequest
{
    /// <summary>
    /// Full Zillow URL: homedetails, /b/, /community/, or /apartments/.
    /// </summary>
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Listing status to resolve.
    /// </summary>
    public StatusZillapiZillowPropertyDataPropertiesApi Status { get; init; } = StatusZillapiZillowPropertyDataPropertiesApi.ForSale;

    /// <summary>
    /// For building URLs, which units to extract. <c>disabled</c> returns the parent record only; any other value returns an array of unit records.
    /// </summary>
    public ExtractUnits ExtractUnits { get; init; } = ExtractUnits.Disabled;

    /// <summary>
    /// Comma-separated dotted-path field projection, e.g. <c>zpid,address.streetAddress,priceHistory[0].price</c>.
    /// </summary>
    public string? Fields { get; init; }
}
