using Instagram.Models;

namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the UpdateMedia operation.
/// </summary>
public sealed record UpdateMediaRequest
{
    public required string MediaId { get; init; }

    public RequestInstagramGraphMediaApi? Body { get; init; }
}
