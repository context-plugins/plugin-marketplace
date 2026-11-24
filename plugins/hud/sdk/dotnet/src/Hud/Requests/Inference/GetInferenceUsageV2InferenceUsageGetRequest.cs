using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Inference;

/// <summary>
/// The inputs of the GetInferenceUsageV2InferenceUsageGet operation.
/// </summary>
public sealed record GetInferenceUsageV2InferenceUsageGetRequest
{
    [Minimum(1)]
    [Maximum(365)]
    public int Days { get; init; } = 7;

    public UserId? UserId { get; init; }

    public ApiKeyId? ApiKeyId { get; init; }

    public ByokCredentialId? ByokCredentialId { get; init; }

    public ModelId? ModelId { get; init; }

    public RequestType? RequestType { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
