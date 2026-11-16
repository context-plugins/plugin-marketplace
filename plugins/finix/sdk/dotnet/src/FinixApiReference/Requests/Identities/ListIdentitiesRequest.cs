using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.Identities;

/// <summary>
/// The inputs of the ListIdentities operation.
/// </summary>
public sealed record ListIdentitiesRequest
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
    /// Filter by the full business name. Partial business names are not supported.
    /// </summary>
    public string? BusinessName { get; init; }

    /// <summary>
    /// Filter by the business type. Partial business types are not supported.
    /// </summary>
    public BusinessType5? BusinessType { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Filter by the <c>default_statement_descriptor</c>.
    /// </summary>
    public string? DefaultStatementDescriptor { get; init; }

    /// <summary>
    /// Filter by the email address or email domain. Partial emails are not supported.
    /// </summary>
    public string? Email { get; init; }

    /// <summary>
    /// Filter by the first name of the person associated to the <c>Identity</c>.
    /// </summary>
    public string? FirstName { get; init; }

    /// <summary>
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Filter by the role of the person associated to the <c>Identity</c>.
    /// </summary>
    public IdentityRole? IdentityRole { get; init; }

    /// <summary>
    /// Filter by the last name of the person associated to the <c>Identity</c>.
    /// </summary>
    public string? LastName { get; init; }

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
    /// Filter by the title if available.
    /// </summary>
    public string? Title { get; init; }

    /// <summary>
    /// Filter by the type of <c>Identity</c>.
    /// </summary>
    public Type51? Type { get; init; }

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
