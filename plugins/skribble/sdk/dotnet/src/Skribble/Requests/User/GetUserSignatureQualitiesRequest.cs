using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Requests.User;

/// <summary>
/// The inputs of the GetUserSignatureQualities operation.
/// </summary>
public sealed record GetUserSignatureQualitiesRequest
{
    /// <summary>
    /// Username to find
    /// </summary>
    [Format(FormatKind.Email)]
    public string? Username { get; init; }
}
