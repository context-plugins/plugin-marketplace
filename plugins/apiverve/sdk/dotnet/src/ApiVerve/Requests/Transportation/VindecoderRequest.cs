namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Vindecoder operation.
/// </summary>
public sealed record VindecoderRequest
{
    /// <summary>
    /// The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the available characters allow.
    /// </summary>
    public required string Vin { get; init; }
}
