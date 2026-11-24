using Hightouch.Models;

namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the CreateModel operation.
/// </summary>
public sealed record CreateModelRequest
{
    public bool SkipColumnQuery { get; init; } = false;

    public required ModelCreate Body { get; init; }
}
