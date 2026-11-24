using System;
using System.ComponentModel.DataAnnotations;
using Givebutter.Models.Enums;

namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactsIndex operation.
/// </summary>
public sealed record ContactsIndexRequest
{
    public ContactType? Type { get; init; }

    public DateTimeOffset? CreatedAfter { get; init; }

    public DateTimeOffset? CreatedBefore { get; init; }

    public DateTimeOffset? UpdatedAfter { get; init; }

    public DateTimeOffset? UpdatedBefore { get; init; }

    public double? TotalContributionsMin { get; init; }

    public double? TotalContributionsMax { get; init; }

    public double? RecurringContributionsMin { get; init; }

    public double? RecurringContributionsMax { get; init; }

    public string? Tags { get; init; }

    public SortBy? SortBy { get; init; }

    public SortByDesc? SortByDesc { get; init; }

    public string? Email { get; init; }

    public string? PrimaryEmail { get; init; }

    [MaxLength(1000)]
    public string? FirstName { get; init; }

    [MaxLength(1000)]
    public string? LastName { get; init; }
}
