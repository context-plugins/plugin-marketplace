using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppsEstimatesPlayDevelopersIdEstimatesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayDevelopersEstimates401Error1> _playDevelopersEstimates401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppsEstimatesPlayDevelopersIdEstimatesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayDevelopersEstimates401Error1> playDevelopersEstimates401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playDevelopersEstimates401Error1Value = playDevelopersEstimates401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppsEstimatesPlayDevelopersIdEstimatesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppsEstimatesPlayDevelopersIdEstimatesGetError AsPlayDevelopersEstimates401Error1(PlayDevelopersEstimates401Error1 value) =>
        new(default, Optional<PlayDevelopersEstimates401Error1>.Some(value), default, default);

    private static GetAppsEstimatesPlayDevelopersIdEstimatesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppsEstimatesPlayDevelopersIdEstimatesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayDevelopersEstimates401Error1([NotNullWhen(true)] out PlayDevelopersEstimates401Error1? value) =>
        _playDevelopersEstimates401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayDevelopersEstimates401Error1, TResult> onPlayDevelopersEstimates401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayDevelopersEstimates401Error1(
                out var playDevelopersEstimates401Error1Value) => onPlayDevelopersEstimates401Error1(
                playDevelopersEstimates401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetAppsEstimatesPlayDevelopersIdEstimatesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayDevelopersEstimates401Error1> onPlayDevelopersEstimates401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayDevelopersEstimates401Error1(
            out var playDevelopersEstimates401Error1Value)) onPlayDevelopersEstimates401Error1(
            playDevelopersEstimates401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetAppsEstimatesPlayDevelopersIdEstimatesGetError)} holds no value.");
    }

    private static Task<GetAppsEstimatesPlayDevelopersIdEstimatesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayDevelopersEstimates401Error1>().As(AsPlayDevelopersEstimates401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppsEstimatesPlayDevelopersIdEstimatesGetError> Response { get; } = new(Create);
}
