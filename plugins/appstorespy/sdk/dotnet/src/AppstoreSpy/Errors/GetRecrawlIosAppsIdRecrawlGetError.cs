using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetRecrawlIosAppsIdRecrawlGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAppsRecrawl401Error1> _iosAppsRecrawl401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetRecrawlIosAppsIdRecrawlGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAppsRecrawl401Error1> iosAppsRecrawl401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAppsRecrawl401Error1Value = iosAppsRecrawl401Error1Value;
        _stringValue = stringValue;
    }

    private static GetRecrawlIosAppsIdRecrawlGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetRecrawlIosAppsIdRecrawlGetError AsIosAppsRecrawl401Error1(IosAppsRecrawl401Error1 value) =>
        new(default, Optional<IosAppsRecrawl401Error1>.Some(value), default, default);

    private static GetRecrawlIosAppsIdRecrawlGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetRecrawlIosAppsIdRecrawlGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAppsRecrawl401Error1([NotNullWhen(true)] out IosAppsRecrawl401Error1? value) =>
        _iosAppsRecrawl401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAppsRecrawl401Error1, TResult> onIosAppsRecrawl401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAppsRecrawl401Error1(out var iosAppsRecrawl401Error1Value) => onIosAppsRecrawl401Error1(
                iosAppsRecrawl401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetRecrawlIosAppsIdRecrawlGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAppsRecrawl401Error1> onIosAppsRecrawl401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAppsRecrawl401Error1(out var iosAppsRecrawl401Error1Value)) onIosAppsRecrawl401Error1(
            iosAppsRecrawl401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetRecrawlIosAppsIdRecrawlGetError)} holds no value.");
    }

    private static Task<GetRecrawlIosAppsIdRecrawlGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAppsRecrawl401Error1>().As(AsIosAppsRecrawl401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetRecrawlIosAppsIdRecrawlGetError> Response { get; } = new(Create);
}
