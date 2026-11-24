using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class CreateRoleError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ProblemDetails> _problemDetailsValue;

    private CreateRoleError(Optional<Error> errorValue,
        Optional<ProblemDetails> problemDetailsValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _problemDetailsValue = problemDetailsValue;
    }

    private static CreateRoleError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static CreateRoleError AsProblemDetails(ProblemDetails value) =>
        new(default, Optional<ProblemDetails>.Some(value), default);

    private static CreateRoleError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value) =>
        _problemDetailsValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ProblemDetails, TResult> onProblemDetails,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetProblemDetails(out var problemDetailsValue) => onProblemDetails(problemDetailsValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateRoleError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<ProblemDetails> onProblemDetails, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetProblemDetails(out var problemDetailsValue)) onProblemDetails(problemDetailsValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateRoleError)} holds no value.");
    }

    private static Task<CreateRoleError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 409 or 500 => response.Json<Error>().As(AsError),
            422 => response.Json<ProblemDetails>().As(AsProblemDetails),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateRoleError> Response { get; } = new(Create);
}
