using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the DevFilterSearchPlayDevelopersQueryPost operation.
/// </summary>
public sealed record DevFilterSearchPlayDevelopersQueryPostRequest
{
    public required PlayDevSearchBody Body { get; init; }
}
