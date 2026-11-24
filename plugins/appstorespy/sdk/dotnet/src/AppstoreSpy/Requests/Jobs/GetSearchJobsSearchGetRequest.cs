using System;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.Jobs;

/// <summary>
/// The inputs of the GetSearchJobsSearchGet operation.
/// </summary>
public sealed record GetSearchJobsSearchGetRequest
{
    public Store? Store { get; init; }

    public string? Term { get; init; }

    public string? IdUser { get; init; }

    public string? Country { get; init; }

    public string? SearchId { get; init; }

    public DateTimeOffset? UpdatedGte { get; init; }

    public DateTimeOffset? UpdatedLte { get; init; }
}
