using Archbee.Models;

namespace Archbee.Requests.Suggestions;

/// <summary>
/// The inputs of the DiscardSuggestionDocument operation.
/// </summary>
public sealed record DiscardSuggestionDocumentRequest
{
    public required SuggestChangeDiscardRequest Body { get; init; }
}
