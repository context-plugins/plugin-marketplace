using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the DevFilterSearchIosDevelopersQueryPost operation.
/// </summary>
public sealed record DevFilterSearchIosDevelopersQueryPostRequest
{
    public required IosDevSearchBody Body { get; init; }
}
