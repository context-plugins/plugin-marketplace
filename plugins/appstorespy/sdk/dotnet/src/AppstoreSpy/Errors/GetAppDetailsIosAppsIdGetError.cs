using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppDetailsIosAppsIdGetError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosApps401Error1> _iosApps401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppDetailsIosAppsIdGetError(Optional<Error> errorValue,
        Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosApps401Error1> iosApps401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosApps401Error1Value = iosApps401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppDetailsIosAppsIdGetError AsError(Error value) =>
        new(Optional<Error>.Some(value), default, default, default, default);

    private static GetAppDetailsIosAppsIdGetError AsHttpValidationError(HttpValidationError value) =>
        new(default, Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppDetailsIosAppsIdGetError AsIosApps401Error1(IosApps401Error1 value) =>
        new(default, default, Optional<IosApps401Error1>.Some(value), default, default);

    private static GetAppDetailsIosAppsIdGetError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static GetAppDetailsIosAppsIdGetError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosApps401Error1([NotNullWhen(true)] out IosApps401Error1? value) =>
        _iosApps401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosApps401Error1, TResult> onIosApps401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosApps401Error1(out var iosApps401Error1Value) => onIosApps401Error1(iosApps401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAppDetailsIosAppsIdGetError)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<HttpValidationError> onHttpValidationError,
        Action<IosApps401Error1> onIosApps401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosApps401Error1(out var iosApps401Error1Value)) onIosApps401Error1(iosApps401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAppDetailsIosAppsIdGetError)} holds no value.");
    }

    private static Task<GetAppDetailsIosAppsIdGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosApps401Error1>().As(AsIosApps401Error1),
            402 => response.Json<string>().As(AsString),
            403 or 429 => response.Json<Error>().As(AsError),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppDetailsIosAppsIdGetError> Response { get; } = new(Create);
}
