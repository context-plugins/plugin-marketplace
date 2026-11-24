using CommonElements.Models.Enums;

namespace CommonElements.Requests.Meta;

/// <summary>
/// The inputs of the GetDataDictionary operation.
/// </summary>
public sealed record GetDataDictionaryRequest
{
    /// <summary>
    /// Limit to one resource key, for example <c>associations</c>.
    /// </summary>
    public string? Resource { get; init; }

    /// <summary>
    /// <c>1</c> (default) measures per-field fill rates from planner statistics; <c>0</c> skips them for a faster response.
    /// </summary>
    public FillRates? FillRates { get; init; }
}
