using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetSimilarIosAppsSimilarPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAppsSimilar401Error1> _iosAppsSimilar401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetSimilarIosAppsSimilarPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAppsSimilar401Error1> iosAppsSimilar401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAppsSimilar401Error1Value = iosAppsSimilar401Error1Value;
        _stringValue = stringValue;
    }

    private static GetSimilarIosAppsSimilarPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetSimilarIosAppsSimilarPostError AsIosAppsSimilar401Error1(IosAppsSimilar401Error1 value) =>
        new(default, Optional<IosAppsSimilar401Error1>.Some(value), default, default);

    private static GetSimilarIosAppsSimilarPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetSimilarIosAppsSimilarPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAppsSimilar401Error1([NotNullWhen(true)] out IosAppsSimilar401Error1? value) =>
        _iosAppsSimilar401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAppsSimilar401Error1, TResult> onIosAppsSimilar401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAppsSimilar401Error1(out var iosAppsSimilar401Error1Value) => onIosAppsSimilar401Error1(
                iosAppsSimilar401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSimilarIosAppsSimilarPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAppsSimilar401Error1> onIosAppsSimilar401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAppsSimilar401Error1(out var iosAppsSimilar401Error1Value)) onIosAppsSimilar401Error1(
            iosAppsSimilar401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSimilarIosAppsSimilarPostError)} holds no value.");
    }

    private static Task<GetSimilarIosAppsSimilarPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAppsSimilar401Error1>().As(AsIosAppsSimilar401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSimilarIosAppsSimilarPostError> Response { get; } = new(Create);
}
