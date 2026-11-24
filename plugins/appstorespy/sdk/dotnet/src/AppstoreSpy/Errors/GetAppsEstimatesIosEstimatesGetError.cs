using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppsEstimatesIosEstimatesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosEstimates401Error1> _iosEstimates401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppsEstimatesIosEstimatesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosEstimates401Error1> iosEstimates401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosEstimates401Error1Value = iosEstimates401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppsEstimatesIosEstimatesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppsEstimatesIosEstimatesGetError AsIosEstimates401Error1(IosEstimates401Error1 value) =>
        new(default, Optional<IosEstimates401Error1>.Some(value), default, default);

    private static GetAppsEstimatesIosEstimatesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppsEstimatesIosEstimatesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosEstimates401Error1([NotNullWhen(true)] out IosEstimates401Error1? value) =>
        _iosEstimates401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosEstimates401Error1, TResult> onIosEstimates401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosEstimates401Error1(out var iosEstimates401Error1Value) => onIosEstimates401Error1(
                iosEstimates401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAppsEstimatesIosEstimatesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosEstimates401Error1> onIosEstimates401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosEstimates401Error1(out var iosEstimates401Error1Value)) onIosEstimates401Error1(
            iosEstimates401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAppsEstimatesIosEstimatesGetError)} holds no value.");
    }

    private static Task<GetAppsEstimatesIosEstimatesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosEstimates401Error1>().As(AsIosEstimates401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppsEstimatesIosEstimatesGetError> Response { get; } = new(Create);
}
