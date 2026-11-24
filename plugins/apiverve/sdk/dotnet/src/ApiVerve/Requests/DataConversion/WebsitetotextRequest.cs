using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Websitetotext operation.
/// </summary>
public sealed record WebsitetotextRequest
{
    public required V1WebsitetotextRequest Body { get; init; }
}
