using Fillo.Models;

namespace Fillo.Requests.Respondents;

/// <summary>
/// The inputs of the ForgetRespondent operation.
/// </summary>
public sealed record ForgetRespondentRequest
{
    /// <summary>
    /// A respondent profile id or external id.
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1ManageRespondentsRequest Body { get; init; }
}
