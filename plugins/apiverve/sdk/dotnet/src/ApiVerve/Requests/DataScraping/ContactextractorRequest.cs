using ApiVerve.Models;

namespace ApiVerve.Requests.DataScraping;

/// <summary>
/// The inputs of the Contactextractor operation.
/// </summary>
public sealed record ContactextractorRequest
{
    public required V1ContactextractorRequest Body { get; init; }
}
