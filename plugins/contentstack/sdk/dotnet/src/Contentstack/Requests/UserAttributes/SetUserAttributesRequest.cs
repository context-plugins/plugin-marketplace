using System.Collections.Generic;

namespace Contentstack.Requests.UserAttributes;

/// <summary>
/// The inputs of the SetUserAttributes operation.
/// </summary>
public sealed record SetUserAttributesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    /// <summary>
    /// The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers.
    /// </summary>
    public string? XCsPersonalizeUserUid { get; init; }

    public required IReadOnlyDictionary<string, object> Body { get; init; }
}
