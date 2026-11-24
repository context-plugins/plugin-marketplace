using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppsEstimatesPlayEstimatesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayEstimates401Error1> _playEstimates401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppsEstimatesPlayEstimatesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayEstimates401Error1> playEstimates401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playEstimates401Error1Value = playEstimates401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppsEstimatesPlayEstimatesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppsEstimatesPlayEstimatesGetError AsPlayEstimates401Error1(PlayEstimates401Error1 value) =>
        new(default, Optional<PlayEstimates401Error1>.Some(value), default, default);

    private static GetAppsEstimatesPlayEstimatesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppsEstimatesPlayEstimatesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayEstimates401Error1([NotNullWhen(true)] out PlayEstimates401Error1? value) =>
        _playEstimates401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayEstimates401Error1, TResult> onPlayEstimates401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayEstimates401Error1(out var playEstimates401Error1Value) => onPlayEstimates401Error1(
                playEstimates401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAppsEstimatesPlayEstimatesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayEstimates401Error1> onPlayEstimates401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayEstimates401Error1(out var playEstimates401Error1Value)) onPlayEstimates401Error1(
            playEstimates401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAppsEstimatesPlayEstimatesGetError)} holds no value.");
    }

    private static Task<GetAppsEstimatesPlayEstimatesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayEstimates401Error1>().As(AsPlayEstimates401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppsEstimatesPlayEstimatesGetError> Response { get; } = new(Create);
}
