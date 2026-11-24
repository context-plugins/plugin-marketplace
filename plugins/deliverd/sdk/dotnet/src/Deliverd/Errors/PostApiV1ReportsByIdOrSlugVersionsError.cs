using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1ReportsByIdOrSlugVersionsError : ApiError
{
    private readonly Optional<ApiV1ReportsVersions409Error1> _apiV1ReportsVersions409Error1Value;

    private PostApiV1ReportsByIdOrSlugVersionsError(Optional<ApiV1ReportsVersions409Error1> apiV1ReportsVersions409Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ReportsVersions409Error1Value = apiV1ReportsVersions409Error1Value;
    }

    private static PostApiV1ReportsByIdOrSlugVersionsError AsApiV1ReportsVersions409Error1(ApiV1ReportsVersions409Error1 value) =>
        new(Optional<ApiV1ReportsVersions409Error1>.Some(value), default);

    private static PostApiV1ReportsByIdOrSlugVersionsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1ReportsVersions409Error1([NotNullWhen(true)] out ApiV1ReportsVersions409Error1? value) =>
        _apiV1ReportsVersions409Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ReportsVersions409Error1, TResult> onApiV1ReportsVersions409Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ReportsVersions409Error1(
                out var apiV1ReportsVersions409Error1Value) => onApiV1ReportsVersions409Error1(
                apiV1ReportsVersions409Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostApiV1ReportsByIdOrSlugVersionsError)} holds no value.")
        };

    public void Match(Action<ApiV1ReportsVersions409Error1> onApiV1ReportsVersions409Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1ReportsVersions409Error1(
            out var apiV1ReportsVersions409Error1Value)) onApiV1ReportsVersions409Error1(
            apiV1ReportsVersions409Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1ReportsByIdOrSlugVersionsError)} holds no value.");
    }

    private static Task<PostApiV1ReportsByIdOrSlugVersionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            409 => response.Json<ApiV1ReportsVersions409Error1>().As(AsApiV1ReportsVersions409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1ReportsByIdOrSlugVersionsError> Response { get; } = new(Create);
}
