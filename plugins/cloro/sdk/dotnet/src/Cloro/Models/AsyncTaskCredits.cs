using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Credit information for an async task.
/// </summary>
public record AsyncTaskCredits
{
    /// <summary>
    /// Estimated cost, computed when the task is submitted. Nothing is reserved or deducted then; credits are deducted only when the task completes.
    /// </summary>
    [JsonPropertyName("creditsToCharge")]
    public required double CreditsToCharge { get; init; }

    /// <summary>
    /// Credits actually charged: null until the task finishes, then the amount billed for <c>COMPLETED</c>, or <c>0</c> for <c>FAILED</c> (failed tasks are never charged). Equals <c>creditsToCharge</c>, except that AI Mode with <c>include.expandProducts</c> adds +1 credit per product cluster returned.
    /// </summary>
    [JsonPropertyName("creditsCharged")]
    public required double? CreditsCharged { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
