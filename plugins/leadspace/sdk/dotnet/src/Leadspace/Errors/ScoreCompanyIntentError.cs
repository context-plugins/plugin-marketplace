using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Leadspace.Core.ErrorResponse;
using Leadspace.Core.Models;
using Leadspace.Models;

namespace Leadspace.Errors;

public sealed class ScoreCompanyIntentError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<RawError> _noContentValue;

    private ScoreCompanyIntentError(Optional<Error> errorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _noContentValue = noContentValue;
    }

    private static ScoreCompanyIntentError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static ScoreCompanyIntentError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static ScoreCompanyIntentError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ScoreCompanyIntentError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ScoreCompanyIntentError)} holds no value.");
    }

    private static Task<ScoreCompanyIntentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 427 or 500 => response.Json<Error>().As(AsError),
            401 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ScoreCompanyIntentError> Response { get; } = new(Create);
}
