using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CommonElements.Core.ErrorResponse;
using CommonElements.Core.Models;
using CommonElements.Models;

namespace CommonElements.Errors;

public sealed class DeliveriesSchedulesListError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private DeliveriesSchedulesListError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static DeliveriesSchedulesListError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static DeliveriesSchedulesListError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeliveriesSchedulesListError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeliveriesSchedulesListError)} holds no value.");
    }

    private static Task<DeliveriesSchedulesListError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeliveriesSchedulesListError> Response { get; } = new(Create);
}
