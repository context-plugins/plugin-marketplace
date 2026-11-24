using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using NordicFinancialNews.Core.ErrorResponse;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models;

namespace NordicFinancialNews.Errors;

public sealed class GetApiV1EventTypesError : ApiError
{
    private readonly Optional<ProblemDetails> _problemDetailsValue;

    private GetApiV1EventTypesError(Optional<ProblemDetails> problemDetailsValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _problemDetailsValue = problemDetailsValue;
    }

    private static GetApiV1EventTypesError AsProblemDetails(ProblemDetails value) =>
        new(Optional<ProblemDetails>.Some(value), default);

    private static GetApiV1EventTypesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value) =>
        _problemDetailsValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ProblemDetails, TResult> onProblemDetails, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProblemDetails(out var problemDetailsValue) => onProblemDetails(problemDetailsValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetApiV1EventTypesError)} holds no value.")
        };

    public void Match(Action<ProblemDetails> onProblemDetails, Action<RawError> otherwise)
    {
        if (TryGetProblemDetails(out var problemDetailsValue)) onProblemDetails(problemDetailsValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetApiV1EventTypesError)} holds no value.");
    }

    private static Task<GetApiV1EventTypesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.Json<ProblemDetails>().As(AsProblemDetails),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetApiV1EventTypesError> Response { get; } = new(Create);
}
