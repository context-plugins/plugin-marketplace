using Archbee.Models;

namespace Archbee.Requests.Suggestions;

/// <summary>
/// The inputs of the MergeSuggestionIntoMainDocument operation.
/// </summary>
public sealed record MergeSuggestionIntoMainDocumentRequest
{
    public required SuggestChangeMergeRequest Body { get; init; }
}
