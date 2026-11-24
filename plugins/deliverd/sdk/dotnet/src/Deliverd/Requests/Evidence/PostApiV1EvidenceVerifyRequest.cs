using System.Collections.Generic;

namespace Deliverd.Requests.Evidence;

/// <summary>
/// The inputs of the PostApiV1EvidenceVerify operation.
/// </summary>
public sealed record PostApiV1EvidenceVerifyRequest
{
    public IReadOnlyDictionary<string, object>? Body { get; init; }
}
