namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Horoscope operation.
/// </summary>
public sealed record HoroscopeRequest
{
    /// <summary>
    /// The zodiac sign for which you want to get the horoscope
    /// </summary>
    public required string Sign { get; init; }
}
