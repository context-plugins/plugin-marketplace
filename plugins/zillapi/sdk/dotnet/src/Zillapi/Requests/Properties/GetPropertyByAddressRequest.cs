using System.ComponentModel.DataAnnotations;
using Zillapi.Models.Enums;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the GetPropertyByAddress operation.
/// </summary>
public sealed record GetPropertyByAddressRequest
{
    /// <summary>
    /// Full street address including city, state, and ZIP; geocoded upstream.
    /// </summary>
    [MinLength(6)]
    public required string Address { get; init; }

    /// <summary>
    /// Listing status to resolve.
    /// </summary>
    public StatusZillapiZillowPropertyDataPropertiesApi Status { get; init; } = StatusZillapiZillowPropertyDataPropertiesApi.ForSale;

    /// <summary>
    /// Comma-separated dotted-path field projection.
    /// </summary>
    public string? Fields { get; init; }
}
