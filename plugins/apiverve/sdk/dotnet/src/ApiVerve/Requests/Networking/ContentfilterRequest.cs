using ApiVerve.Models;

namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Contentfilter operation.
/// </summary>
public sealed record ContentfilterRequest
{
    public required V1ContentfilterRequest Body { get; init; }
}
