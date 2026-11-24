using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CarsXe.Core.ErrorResponse;
using CarsXe.Core.Models;
using CarsXe.Models;

namespace CarsXe.Errors;

public sealed class GetVehicleImagesError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<UsageLimitError> _usageLimitErrorValue;

    private GetVehicleImagesError(Optional<Error> errorValue,
        Optional<UsageLimitError> usageLimitErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _usageLimitErrorValue = usageLimitErrorValue;
    }

    private static GetVehicleImagesError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static GetVehicleImagesError AsUsageLimitError(UsageLimitError value) =>
        new(default, Optional<UsageLimitError>.Some(value), default);

    private static GetVehicleImagesError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value) =>
        _usageLimitErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<UsageLimitError, TResult> onUsageLimitError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetUsageLimitError(out var usageLimitErrorValue) => onUsageLimitError(usageLimitErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetVehicleImagesError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<UsageLimitError> onUsageLimitError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetUsageLimitError(out var usageLimitErrorValue)) onUsageLimitError(usageLimitErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetVehicleImagesError)} holds no value.");
    }

    private static Task<GetVehicleImagesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 or 500 => response.Json<Error>().As(AsError),
            429 => response.Json<UsageLimitError>().As(AsUsageLimitError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetVehicleImagesError> Response { get; } = new(Create);
}
