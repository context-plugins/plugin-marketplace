using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CarsXe.Core.ErrorResponse;
using CarsXe.Core.Models;
using CarsXe.Models;

namespace CarsXe.Errors;

public sealed class GetLienTheftError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<UsageLimitError> _usageLimitErrorValue;

    private GetLienTheftError(Optional<Error> errorValue,
        Optional<UsageLimitError> usageLimitErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _usageLimitErrorValue = usageLimitErrorValue;
    }

    private static GetLienTheftError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static GetLienTheftError AsUsageLimitError(UsageLimitError value) =>
        new(default, Optional<UsageLimitError>.Some(value), default);

    private static GetLienTheftError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value) =>
        _usageLimitErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<UsageLimitError, TResult> onUsageLimitError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetUsageLimitError(out var usageLimitErrorValue) => onUsageLimitError(usageLimitErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetLienTheftError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<UsageLimitError> onUsageLimitError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetUsageLimitError(out var usageLimitErrorValue)) onUsageLimitError(usageLimitErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetLienTheftError)} holds no value.");
    }

    private static Task<GetLienTheftError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 => response.Json<Error>().As(AsError),
            429 => response.Json<UsageLimitError>().As(AsUsageLimitError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetLienTheftError> Response { get; } = new(Create);
}
