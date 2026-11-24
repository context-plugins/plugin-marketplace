using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingSimilarTerms operation.
/// </summary>
public sealed record SaplingSimilarTermsRequest
{
    public required ApiV1ThesaurusRequest Body { get; init; }
}
