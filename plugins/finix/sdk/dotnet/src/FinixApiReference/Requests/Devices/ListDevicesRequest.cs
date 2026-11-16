using System;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the ListDevices operation.
/// </summary>
public sealed record ListDevicesRequest
{
    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

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
    /// Filter by the description.
    /// </summary>
    public string? Description { get; init; }

    /// <summary>
    /// Filter by the enabled value.
    /// </summary>
    public bool? Enabled { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by <c>Merchant</c> ID.
    /// </summary>
    public string? MerchantId { get; init; }

    /// <summary>
    /// Filter by <c>Merchant Identity</c> ID.
    /// </summary>
    public string? MerchantIdentityId { get; init; }

    /// <summary>
    /// Filter by the name.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by the model.
    /// </summary>
    public string? Model { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter by the serial number.
    /// </summary>
    public string? SerialNumber { get; init; }

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
