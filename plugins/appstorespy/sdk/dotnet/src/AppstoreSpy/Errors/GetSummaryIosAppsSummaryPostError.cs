using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetSummaryIosAppsSummaryPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAppsSummary401Error1> _iosAppsSummary401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetSummaryIosAppsSummaryPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAppsSummary401Error1> iosAppsSummary401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAppsSummary401Error1Value = iosAppsSummary401Error1Value;
        _stringValue = stringValue;
    }

    private static GetSummaryIosAppsSummaryPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetSummaryIosAppsSummaryPostError AsIosAppsSummary401Error1(IosAppsSummary401Error1 value) =>
        new(default, Optional<IosAppsSummary401Error1>.Some(value), default, default);

    private static GetSummaryIosAppsSummaryPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetSummaryIosAppsSummaryPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAppsSummary401Error1([NotNullWhen(true)] out IosAppsSummary401Error1? value) =>
        _iosAppsSummary401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAppsSummary401Error1, TResult> onIosAppsSummary401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAppsSummary401Error1(out var iosAppsSummary401Error1Value) => onIosAppsSummary401Error1(
                iosAppsSummary401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSummaryIosAppsSummaryPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAppsSummary401Error1> onIosAppsSummary401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAppsSummary401Error1(out var iosAppsSummary401Error1Value)) onIosAppsSummary401Error1(
            iosAppsSummary401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSummaryIosAppsSummaryPostError)} holds no value.");
    }

    private static Task<GetSummaryIosAppsSummaryPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAppsSummary401Error1>().As(AsIosAppsSummary401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSummaryIosAppsSummaryPostError> Response { get; } = new(Create);
}
