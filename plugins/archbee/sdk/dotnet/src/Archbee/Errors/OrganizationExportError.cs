using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class OrganizationExportError : ApiError
{
    private readonly Optional<TeamExport400Error1> _teamExport400Error1Value;

    private OrganizationExportError(Optional<TeamExport400Error1> teamExport400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _teamExport400Error1Value = teamExport400Error1Value;
    }

    private static OrganizationExportError AsTeamExport400Error1(TeamExport400Error1 value) =>
        new(Optional<TeamExport400Error1>.Some(value), default);

    private static OrganizationExportError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetTeamExport400Error1([NotNullWhen(true)] out TeamExport400Error1? value) =>
        _teamExport400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<TeamExport400Error1, TResult> onTeamExport400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTeamExport400Error1(out var teamExport400Error1Value) => onTeamExport400Error1(
                teamExport400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationExportError)} holds no value.")
        };

    public void Match(Action<TeamExport400Error1> onTeamExport400Error1, Action<RawError> otherwise)
    {
        if (TryGetTeamExport400Error1(out var teamExport400Error1Value)) onTeamExport400Error1(
            teamExport400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationExportError)} holds no value.");
    }

    private static Task<OrganizationExportError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<TeamExport400Error1>().As(AsTeamExport400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationExportError> Response { get; } = new(Create);
}
