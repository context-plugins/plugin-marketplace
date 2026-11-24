using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Journals;

/// <summary>
/// The inputs of the CreateJournal operation.
/// </summary>
public sealed record CreateJournalRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required JournalCreate Body { get; init; }
}
