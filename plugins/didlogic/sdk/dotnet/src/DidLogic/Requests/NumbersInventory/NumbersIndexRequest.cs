namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersIndex operation.
/// </summary>
public sealed record NumbersIndexRequest
{
    /// <summary>
    /// Include numbers pending documentation approval
    /// </summary>
    public string? ShowAll { get; init; }
}
