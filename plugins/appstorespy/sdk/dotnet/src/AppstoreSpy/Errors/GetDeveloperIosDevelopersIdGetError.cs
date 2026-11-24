using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetDeveloperIosDevelopersIdGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosDevelopers401Error1> _iosDevelopers401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetDeveloperIosDevelopersIdGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosDevelopers401Error1> iosDevelopers401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosDevelopers401Error1Value = iosDevelopers401Error1Value;
        _stringValue = stringValue;
    }

    private static GetDeveloperIosDevelopersIdGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetDeveloperIosDevelopersIdGetError AsIosDevelopers401Error1(IosDevelopers401Error1 value) =>
        new(default, Optional<IosDevelopers401Error1>.Some(value), default, default);

    private static GetDeveloperIosDevelopersIdGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetDeveloperIosDevelopersIdGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosDevelopers401Error1([NotNullWhen(true)] out IosDevelopers401Error1? value) =>
        _iosDevelopers401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosDevelopers401Error1, TResult> onIosDevelopers401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosDevelopers401Error1(out var iosDevelopers401Error1Value) => onIosDevelopers401Error1(
                iosDevelopers401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetDeveloperIosDevelopersIdGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosDevelopers401Error1> onIosDevelopers401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosDevelopers401Error1(out var iosDevelopers401Error1Value)) onIosDevelopers401Error1(
            iosDevelopers401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetDeveloperIosDevelopersIdGetError)} holds no value.");
    }

    private static Task<GetDeveloperIosDevelopersIdGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosDevelopers401Error1>().As(AsIosDevelopers401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetDeveloperIosDevelopersIdGetError> Response { get; } = new(Create);
}
