using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppSearchIosAppsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosApps401Error1> _iosApps401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppSearchIosAppsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosApps401Error1> iosApps401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosApps401Error1Value = iosApps401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppSearchIosAppsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppSearchIosAppsGetError AsIosApps401Error1(IosApps401Error1 value) =>
        new(default, Optional<IosApps401Error1>.Some(value), default, default);

    private static GetAppSearchIosAppsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppSearchIosAppsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosApps401Error1([NotNullWhen(true)] out IosApps401Error1? value) =>
        _iosApps401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosApps401Error1, TResult> onIosApps401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosApps401Error1(out var iosApps401Error1Value) => onIosApps401Error1(iosApps401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAppSearchIosAppsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosApps401Error1> onIosApps401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosApps401Error1(out var iosApps401Error1Value)) onIosApps401Error1(iosApps401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAppSearchIosAppsGetError)} holds no value.");
    }

    private static Task<GetAppSearchIosAppsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosApps401Error1>().As(AsIosApps401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppSearchIosAppsGetError> Response { get; } = new(Create);
}
