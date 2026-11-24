using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetIosRankingsIosRankingsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosRankings401Error1> _iosRankings401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetIosRankingsIosRankingsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosRankings401Error1> iosRankings401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosRankings401Error1Value = iosRankings401Error1Value;
        _stringValue = stringValue;
    }

    private static GetIosRankingsIosRankingsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetIosRankingsIosRankingsGetError AsIosRankings401Error1(IosRankings401Error1 value) =>
        new(default, Optional<IosRankings401Error1>.Some(value), default, default);

    private static GetIosRankingsIosRankingsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetIosRankingsIosRankingsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosRankings401Error1([NotNullWhen(true)] out IosRankings401Error1? value) =>
        _iosRankings401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosRankings401Error1, TResult> onIosRankings401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosRankings401Error1(out var iosRankings401Error1Value) => onIosRankings401Error1(
                iosRankings401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetIosRankingsIosRankingsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosRankings401Error1> onIosRankings401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosRankings401Error1(out var iosRankings401Error1Value)) onIosRankings401Error1(
            iosRankings401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetIosRankingsIosRankingsGetError)} holds no value.");
    }

    private static Task<GetIosRankingsIosRankingsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosRankings401Error1>().As(AsIosRankings401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetIosRankingsIosRankingsGetError> Response { get; } = new(Create);
}
