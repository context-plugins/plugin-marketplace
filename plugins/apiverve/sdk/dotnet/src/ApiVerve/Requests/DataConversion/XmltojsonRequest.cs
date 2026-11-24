using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Xmltojson operation.
/// </summary>
public sealed record XmltojsonRequest
{
    public required V1XmltojsonRequest Body { get; init; }
}
