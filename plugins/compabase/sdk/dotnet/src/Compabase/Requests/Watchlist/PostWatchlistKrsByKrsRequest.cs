using System.ComponentModel.DataAnnotations;

namespace Compabase.Requests.Watchlist;

/// <summary>
/// The inputs of the PostWatchlistKrsByKrs operation.
/// </summary>
public sealed record PostWatchlistKrsByKrsRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with <c>400 INVALID_KRS</c>.
    /// </summary>
    public required string Krs { get; init; }

    /// <summary>
    /// When <c>true</c>, the request is validated (key, KRS, plan limits) and the response says what
    /// would happen (<c>would_add</c> / <c>would_remove</c>), but nothing is written and no webhook fires.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,
    /// so repeating the same request — with or without this header — never creates a duplicate entry.
    /// The key is echoed back in the <c>Idempotency-Key</c> response header.
    /// </summary>
    [MaxLength(255)]
    public string? IdempotencyKey { get; init; }
}
