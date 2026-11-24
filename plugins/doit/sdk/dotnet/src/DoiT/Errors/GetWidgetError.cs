using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class GetWidgetError : ApiError
{
    private readonly Optional<ProblemDetails> _problemDetailsValue;

    private GetWidgetError(Optional<ProblemDetails> problemDetailsValue, Optional<RawError> fallback) : base(fallback)
    {
        _problemDetailsValue = problemDetailsValue;
    }

    private static GetWidgetError AsProblemDetails(ProblemDetails value) =>
        new(Optional<ProblemDetails>.Some(value), default);

    private static GetWidgetError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value) =>
        _problemDetailsValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ProblemDetails, TResult> onProblemDetails, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProblemDetails(out var problemDetailsValue) => onProblemDetails(problemDetailsValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetWidgetError)} holds no value.")
        };

    public void Match(Action<ProblemDetails> onProblemDetails, Action<RawError> otherwise)
    {
        if (TryGetProblemDetails(out var problemDetailsValue)) onProblemDetails(problemDetailsValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetWidgetError)} holds no value.");
    }

    private static Task<GetWidgetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 or 500 or 503 => response.Json<ProblemDetails>().As(AsProblemDetails),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetWidgetError> Response { get; } = new(Create);
}
