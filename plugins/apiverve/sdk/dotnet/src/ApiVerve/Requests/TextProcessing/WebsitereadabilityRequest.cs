using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Websitereadability operation.
/// </summary>
public sealed record WebsitereadabilityRequest
{
    public required V1WebsitereadabilityRequest Body { get; init; }
}
