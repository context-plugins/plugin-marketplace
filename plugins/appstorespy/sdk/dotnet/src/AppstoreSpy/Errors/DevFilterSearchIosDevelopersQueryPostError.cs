using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class DevFilterSearchIosDevelopersQueryPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosDevelopersQuery401Error1> _iosDevelopersQuery401Error1Value;

    private readonly Optional<string> _stringValue;

    private DevFilterSearchIosDevelopersQueryPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosDevelopersQuery401Error1> iosDevelopersQuery401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosDevelopersQuery401Error1Value = iosDevelopersQuery401Error1Value;
        _stringValue = stringValue;
    }

    private static DevFilterSearchIosDevelopersQueryPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static DevFilterSearchIosDevelopersQueryPostError AsIosDevelopersQuery401Error1(IosDevelopersQuery401Error1 value) =>
        new(default, Optional<IosDevelopersQuery401Error1>.Some(value), default, default);

    private static DevFilterSearchIosDevelopersQueryPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static DevFilterSearchIosDevelopersQueryPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosDevelopersQuery401Error1([NotNullWhen(true)] out IosDevelopersQuery401Error1? value) =>
        _iosDevelopersQuery401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosDevelopersQuery401Error1, TResult> onIosDevelopersQuery401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosDevelopersQuery401Error1(
                out var iosDevelopersQuery401Error1Value) => onIosDevelopersQuery401Error1(
                iosDevelopersQuery401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(DevFilterSearchIosDevelopersQueryPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosDevelopersQuery401Error1> onIosDevelopersQuery401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosDevelopersQuery401Error1(
            out var iosDevelopersQuery401Error1Value)) onIosDevelopersQuery401Error1(iosDevelopersQuery401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DevFilterSearchIosDevelopersQueryPostError)} holds no value.");
    }

    private static Task<DevFilterSearchIosDevelopersQueryPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosDevelopersQuery401Error1>().As(AsIosDevelopersQuery401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DevFilterSearchIosDevelopersQueryPostError> Response { get; } = new(Create);
}
