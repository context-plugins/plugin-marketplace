using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.ConditionSets;

/// <summary>
/// The inputs of the Show6 operation.
/// </summary>
public sealed record Show6Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The UUID of the condition set object
    /// </summary>
    public required string ConditionSetId { get; init; }

    /// <summary>
    /// Optionally expand the response to include additional data.&lt;br&gt; <c>stats</c> - Calculates and returns the active subscriber count for this condition set synchronously.
    /// </summary>
    public IReadOnlyList<ConditionSetShowExpandItems>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
