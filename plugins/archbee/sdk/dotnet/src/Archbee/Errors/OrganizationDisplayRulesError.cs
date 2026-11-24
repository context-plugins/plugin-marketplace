using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class OrganizationDisplayRulesError : ApiError
{
    private readonly Optional<TeamDisplayRules400Error1> _teamDisplayRules400Error1Value;

    private OrganizationDisplayRulesError(Optional<TeamDisplayRules400Error1> teamDisplayRules400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _teamDisplayRules400Error1Value = teamDisplayRules400Error1Value;
    }

    private static OrganizationDisplayRulesError AsTeamDisplayRules400Error1(TeamDisplayRules400Error1 value) =>
        new(Optional<TeamDisplayRules400Error1>.Some(value), default);

    private static OrganizationDisplayRulesError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetTeamDisplayRules400Error1([NotNullWhen(true)] out TeamDisplayRules400Error1? value) =>
        _teamDisplayRules400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<TeamDisplayRules400Error1, TResult> onTeamDisplayRules400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTeamDisplayRules400Error1(
                out var teamDisplayRules400Error1Value) => onTeamDisplayRules400Error1(teamDisplayRules400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationDisplayRulesError)} holds no value.")
        };

    public void Match(Action<TeamDisplayRules400Error1> onTeamDisplayRules400Error1, Action<RawError> otherwise)
    {
        if (TryGetTeamDisplayRules400Error1(out var teamDisplayRules400Error1Value)) onTeamDisplayRules400Error1(
            teamDisplayRules400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationDisplayRulesError)} holds no value.");
    }

    private static Task<OrganizationDisplayRulesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<TeamDisplayRules400Error1>().As(AsTeamDisplayRules400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationDisplayRulesError> Response { get; } = new(Create);
}
