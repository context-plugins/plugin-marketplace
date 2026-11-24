using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Ortto.Core.ErrorResponse;
using Ortto.Core.Models;
using Ortto.Models;

namespace Ortto.Errors;

public sealed class CreateActivitiesError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private CreateActivitiesError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static CreateActivitiesError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static CreateActivitiesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateActivitiesError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateActivitiesError)} holds no value.");
    }

    private static Task<CreateActivitiesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateActivitiesError> Response { get; } = new(Create);
}
