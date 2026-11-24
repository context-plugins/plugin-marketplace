using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Models;
using DynamicFeed.Models;

namespace DynamicFeed.Errors;

public sealed class AirportDelaysAirportDelaysGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private AirportDelaysAirportDelaysGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static AirportDelaysAirportDelaysGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default);

    private static AirportDelaysAirportDelaysGetError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AirportDelaysAirportDelaysGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError, Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AirportDelaysAirportDelaysGetError)} holds no value.");
    }

    private static Task<AirportDelaysAirportDelaysGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AirportDelaysAirportDelaysGetError> Response { get; } = new(Create);
}
