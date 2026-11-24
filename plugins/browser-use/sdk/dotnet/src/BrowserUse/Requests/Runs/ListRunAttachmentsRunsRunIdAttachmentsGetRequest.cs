using System;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the ListRunAttachmentsRunsRunIdAttachmentsGet operation.
/// </summary>
public sealed record ListRunAttachmentsRunsRunIdAttachmentsGetRequest
{
    public required Guid RunId { get; init; }
}
