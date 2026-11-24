using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Statable.Core.ErrorResponse;
using Statable.Core.Models;
using Statable.Models;

namespace Statable.Errors;

public sealed class SetCountrySettingsError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private SetCountrySettingsError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static SetCountrySettingsError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static SetCountrySettingsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SetCountrySettingsError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SetCountrySettingsError)} holds no value.");
    }

    private static Task<SetCountrySettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SetCountrySettingsError> Response { get; } = new(Create);
}
