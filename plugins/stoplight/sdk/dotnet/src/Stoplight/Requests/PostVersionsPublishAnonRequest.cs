using Stoplight.Models;

namespace Stoplight.Requests;

/// <summary>
/// The inputs of the PostVersionsPublishAnon operation.
/// </summary>
public sealed record PostVersionsPublishAnonRequest
{
    public VersionsPublishAnonRequest? Body { get; init; }
}
