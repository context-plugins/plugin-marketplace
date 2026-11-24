using AtlassianCompass.Models;

namespace AtlassianCompass.Requests.EntitlementRestController;

/// <summary>
/// The inputs of the EvaluateEntitlements operation.
/// </summary>
public sealed record EvaluateEntitlementsRequest
{
    public required EntitlementRequestDto Body { get; init; }
}
