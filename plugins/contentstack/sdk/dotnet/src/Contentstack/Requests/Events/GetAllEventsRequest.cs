namespace Contentstack.Requests.Events;

/// <summary>
/// The inputs of the GetAllEvents operation.
/// </summary>
public sealed record GetAllEventsRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
