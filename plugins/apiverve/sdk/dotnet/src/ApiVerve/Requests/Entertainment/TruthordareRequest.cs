namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Truthordare operation.
/// </summary>
public sealed record TruthordareRequest
{
    /// <summary>
    /// Prompt type: truth, dare, or random
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Include adult/spicy prompts
    /// </summary>
    public bool? Adult { get; init; }
}
