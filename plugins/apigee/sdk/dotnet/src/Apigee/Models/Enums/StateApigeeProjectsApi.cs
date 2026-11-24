using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Lint state represents success or failure for linting.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateApigeeProjectsApi>))]
public sealed record StateApigeeProjectsApi : OpenStringEnum<StateApigeeProjectsApi>
{
    private StateApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly StateApigeeProjectsApi LintStateUnspecified = new("LINT_STATE_UNSPECIFIED");

    public static readonly StateApigeeProjectsApi LintStateSuccess = new("LINT_STATE_SUCCESS");

    public static readonly StateApigeeProjectsApi LintStateError = new("LINT_STATE_ERROR");

    public TResult Match<TResult>(Func<TResult> onLintStateUnspecified,
        Func<TResult> onLintStateSuccess,
        Func<TResult> onLintStateError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LintStateUnspecified => onLintStateUnspecified(),
            _ when this == LintStateSuccess => onLintStateSuccess(),
            _ when this == LintStateError => onLintStateError(),
            _ => otherwise(Value)
        };

    public void Match(Action onLintStateUnspecified,
        Action onLintStateSuccess,
        Action onLintStateError,
        Action<string> otherwise)
    {
        if (this == LintStateUnspecified) onLintStateUnspecified();
        else if (this == LintStateSuccess) onLintStateSuccess();
        else if (this == LintStateError) onLintStateError();
        else otherwise(Value);
    }
}
