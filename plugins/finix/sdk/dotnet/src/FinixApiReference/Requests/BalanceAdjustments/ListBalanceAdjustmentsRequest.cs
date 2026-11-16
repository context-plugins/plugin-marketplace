using System;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Requests.BalanceAdjustments;

/// <summary>
/// The inputs of the ListBalanceAdjustments operation.
/// </summary>
public sealed record ListBalanceAdjustmentsRequest
{
    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtLte { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
