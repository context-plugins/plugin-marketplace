using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Querystringbuilder operation.
/// </summary>
public sealed record QuerystringbuilderRequest
{
    public required V1QuerystringbuilderRequest Body { get; init; }
}
