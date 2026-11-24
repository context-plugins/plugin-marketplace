using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetFilterSearchIosAppsQueryPost2Error : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAppsQuery401Error1> _iosAppsQuery401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetFilterSearchIosAppsQueryPost2Error(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAppsQuery401Error1> iosAppsQuery401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAppsQuery401Error1Value = iosAppsQuery401Error1Value;
        _stringValue = stringValue;
    }

    private static GetFilterSearchIosAppsQueryPost2Error AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetFilterSearchIosAppsQueryPost2Error AsIosAppsQuery401Error1(IosAppsQuery401Error1 value) =>
        new(default, Optional<IosAppsQuery401Error1>.Some(value), default, default);

    private static GetFilterSearchIosAppsQueryPost2Error AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetFilterSearchIosAppsQueryPost2Error AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAppsQuery401Error1([NotNullWhen(true)] out IosAppsQuery401Error1? value) =>
        _iosAppsQuery401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAppsQuery401Error1, TResult> onIosAppsQuery401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAppsQuery401Error1(out var iosAppsQuery401Error1Value) => onIosAppsQuery401Error1(
                iosAppsQuery401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetFilterSearchIosAppsQueryPost2Error)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAppsQuery401Error1> onIosAppsQuery401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAppsQuery401Error1(out var iosAppsQuery401Error1Value)) onIosAppsQuery401Error1(
            iosAppsQuery401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetFilterSearchIosAppsQueryPost2Error)} holds no value.");
    }

    private static Task<GetFilterSearchIosAppsQueryPost2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAppsQuery401Error1>().As(AsIosAppsQuery401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetFilterSearchIosAppsQueryPost2Error> Response { get; } = new(Create);
}
