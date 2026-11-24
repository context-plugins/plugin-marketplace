using CarsXe.Models.Enums;

namespace CarsXe.Requests.PlateDecoder;

/// <summary>
/// The inputs of the DecodePlate operation.
/// </summary>
public sealed record DecodePlateRequest
{
    /// <summary>
    /// The vehicle registration number or license plate number.
    /// </summary>
    public required string Plate { get; init; }

    /// <summary>
    /// The two letter state code (US) such as <c>CA</c> or <c>NY</c>, Australian state, or Brazil <c>BR</c>, United Kingdom <c>UK</c>, Ireland <c>IR</c>, Italy <c>IT</c>, Spain <c>ES</c>, India <c>IND</c>, Mexico <c>MX</c>, New Zealand <c>NZ</c>.
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Country code, e.g. Australia <c>AU</c>. Optional for <c>US</c>.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// The format of the response. One of <c>json</c> or <c>xml</c>.
    /// </summary>
    public Format Format { get; init; } = Format.Json;
}
