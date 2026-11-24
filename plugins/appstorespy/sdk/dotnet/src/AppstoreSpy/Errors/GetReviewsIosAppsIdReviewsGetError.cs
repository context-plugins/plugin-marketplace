using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetReviewsIosAppsIdReviewsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAppsReviews401Error1> _iosAppsReviews401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetReviewsIosAppsIdReviewsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAppsReviews401Error1> iosAppsReviews401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAppsReviews401Error1Value = iosAppsReviews401Error1Value;
        _stringValue = stringValue;
    }

    private static GetReviewsIosAppsIdReviewsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetReviewsIosAppsIdReviewsGetError AsIosAppsReviews401Error1(IosAppsReviews401Error1 value) =>
        new(default, Optional<IosAppsReviews401Error1>.Some(value), default, default);

    private static GetReviewsIosAppsIdReviewsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetReviewsIosAppsIdReviewsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAppsReviews401Error1([NotNullWhen(true)] out IosAppsReviews401Error1? value) =>
        _iosAppsReviews401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAppsReviews401Error1, TResult> onIosAppsReviews401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAppsReviews401Error1(out var iosAppsReviews401Error1Value) => onIosAppsReviews401Error1(
                iosAppsReviews401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetReviewsIosAppsIdReviewsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAppsReviews401Error1> onIosAppsReviews401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAppsReviews401Error1(out var iosAppsReviews401Error1Value)) onIosAppsReviews401Error1(
            iosAppsReviews401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetReviewsIosAppsIdReviewsGetError)} holds no value.");
    }

    private static Task<GetReviewsIosAppsIdReviewsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAppsReviews401Error1>().As(AsIosAppsReviews401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetReviewsIosAppsIdReviewsGetError> Response { get; } = new(Create);
}
