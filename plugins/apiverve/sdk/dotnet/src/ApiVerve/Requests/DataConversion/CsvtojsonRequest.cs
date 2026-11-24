using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Csvtojson operation.
/// </summary>
public sealed record CsvtojsonRequest
{
    public required V1CsvtojsonRequest Body { get; init; }
}
