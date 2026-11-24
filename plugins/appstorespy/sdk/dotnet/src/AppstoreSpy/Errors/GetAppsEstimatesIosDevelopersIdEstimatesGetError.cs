using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppsEstimatesIosDevelopersIdEstimatesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosDevelopersEstimates401Error1> _iosDevelopersEstimates401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppsEstimatesIosDevelopersIdEstimatesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosDevelopersEstimates401Error1> iosDevelopersEstimates401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosDevelopersEstimates401Error1Value = iosDevelopersEstimates401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppsEstimatesIosDevelopersIdEstimatesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppsEstimatesIosDevelopersIdEstimatesGetError AsIosDevelopersEstimates401Error1(IosDevelopersEstimates401Error1 value) =>
        new(default, Optional<IosDevelopersEstimates401Error1>.Some(value), default, default);

    private static GetAppsEstimatesIosDevelopersIdEstimatesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppsEstimatesIosDevelopersIdEstimatesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosDevelopersEstimates401Error1([NotNullWhen(true)] out IosDevelopersEstimates401Error1? value) =>
        _iosDevelopersEstimates401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosDevelopersEstimates401Error1, TResult> onIosDevelopersEstimates401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosDevelopersEstimates401Error1(
                out var iosDevelopersEstimates401Error1Value) => onIosDevelopersEstimates401Error1(
                iosDevelopersEstimates401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetAppsEstimatesIosDevelopersIdEstimatesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosDevelopersEstimates401Error1> onIosDevelopersEstimates401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosDevelopersEstimates401Error1(
            out var iosDevelopersEstimates401Error1Value)) onIosDevelopersEstimates401Error1(
            iosDevelopersEstimates401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetAppsEstimatesIosDevelopersIdEstimatesGetError)} holds no value.");
    }

    private static Task<GetAppsEstimatesIosDevelopersIdEstimatesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosDevelopersEstimates401Error1>().As(AsIosDevelopersEstimates401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppsEstimatesIosDevelopersIdEstimatesGetError> Response { get; } = new(Create);
}
