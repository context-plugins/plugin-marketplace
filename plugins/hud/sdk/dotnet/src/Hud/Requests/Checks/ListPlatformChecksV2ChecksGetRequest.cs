using Hud.Models.AnyOf;

namespace Hud.Requests.Checks;

/// <summary>
/// The inputs of the ListPlatformChecksV2ChecksGet operation.
/// </summary>
public sealed record ListPlatformChecksV2ChecksGetRequest
{
    public SubjectType? SubjectType { get; init; }
}
