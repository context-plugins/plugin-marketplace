namespace DidLogic.Requests.Click2Call;

/// <summary>
/// The inputs of the Click2CallShow operation.
/// </summary>
public sealed record Click2CallShowRequest
{
    /// <summary>
    /// Call ID (<c>data.id</c>) from click2call_create, a 26-character ULID
    /// </summary>
    public required string Id { get; init; }
}
