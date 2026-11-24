using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the ResolveGoogleGoto operation.
/// </summary>
public sealed record ResolveGoogleGotoRequest
{
    /// <summary>
    /// The Google redirect link to resolve
    /// </summary>
    public required GoogleGotoRequest Body { get; init; }
}
