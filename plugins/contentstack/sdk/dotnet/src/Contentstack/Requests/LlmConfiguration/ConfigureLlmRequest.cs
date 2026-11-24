using Contentstack.Models;

namespace Contentstack.Requests.LlmConfiguration;

/// <summary>
/// The inputs of the ConfigureLlm operation.
/// </summary>
public sealed record ConfigureLlmRequest
{
    /// <summary>
    /// The unique identifier of the Brand Kit.
    /// </summary>
    public required string BrandKitUid { get; init; }

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required CreateLlmConfigRequest Body { get; init; }
}
