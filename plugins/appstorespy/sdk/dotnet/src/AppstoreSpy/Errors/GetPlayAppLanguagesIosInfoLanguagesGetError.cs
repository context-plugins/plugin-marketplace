using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetPlayAppLanguagesIosInfoLanguagesGetError : ApiError
{
    private readonly Optional<IosInfoLanguages401Error1> _iosInfoLanguages401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetPlayAppLanguagesIosInfoLanguagesGetError(Optional<IosInfoLanguages401Error1> iosInfoLanguages401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _iosInfoLanguages401Error1Value = iosInfoLanguages401Error1Value;
        _stringValue = stringValue;
    }

    private static GetPlayAppLanguagesIosInfoLanguagesGetError AsIosInfoLanguages401Error1(IosInfoLanguages401Error1 value) =>
        new(Optional<IosInfoLanguages401Error1>.Some(value), default, default);

    private static GetPlayAppLanguagesIosInfoLanguagesGetError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static GetPlayAppLanguagesIosInfoLanguagesGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetIosInfoLanguages401Error1([NotNullWhen(true)] out IosInfoLanguages401Error1? value) =>
        _iosInfoLanguages401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IosInfoLanguages401Error1, TResult> onIosInfoLanguages401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIosInfoLanguages401Error1(
                out var iosInfoLanguages401Error1Value) => onIosInfoLanguages401Error1(iosInfoLanguages401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetPlayAppLanguagesIosInfoLanguagesGetError)} holds no value.")
        };

    public void Match(Action<IosInfoLanguages401Error1> onIosInfoLanguages401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetIosInfoLanguages401Error1(out var iosInfoLanguages401Error1Value)) onIosInfoLanguages401Error1(
            iosInfoLanguages401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetPlayAppLanguagesIosInfoLanguagesGetError)} holds no value.");
    }

    private static Task<GetPlayAppLanguagesIosInfoLanguagesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosInfoLanguages401Error1>().As(AsIosInfoLanguages401Error1),
            402 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPlayAppLanguagesIosInfoLanguagesGetError> Response { get; } = new(Create);
}
