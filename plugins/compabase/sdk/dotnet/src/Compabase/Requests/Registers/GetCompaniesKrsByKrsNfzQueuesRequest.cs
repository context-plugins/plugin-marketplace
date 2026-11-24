using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Registers;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsNfzQueues operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsNfzQueuesRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits.
    /// </summary>
    public required string Krs { get; init; }

    /// <summary>
    /// Filter by a fragment of the service name (diacritics optional), e.g. <c>okulist</c>, <c>ortoped</c>, <c>rezonans</c>.
    /// </summary>
    public string? Service { get; init; }

    /// <summary>
    /// Filter by town or district, e.g. <c>Poznań</c>.
    /// </summary>
    public string? Town { get; init; }

    [Maximum(400)]
    public int Limit { get; init; } = 50;
}
