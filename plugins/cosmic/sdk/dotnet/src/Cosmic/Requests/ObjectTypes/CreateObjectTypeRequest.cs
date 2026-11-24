using Cosmic.Models;

namespace Cosmic.Requests.ObjectTypes;

/// <summary>
/// The inputs of the CreateObjectType operation.
/// </summary>
public sealed record CreateObjectTypeRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    public required ObjectTypeCreate Body { get; init; }
}
