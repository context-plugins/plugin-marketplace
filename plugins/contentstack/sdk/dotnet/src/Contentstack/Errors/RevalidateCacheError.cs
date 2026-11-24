using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class RevalidateCacheError : ApiError
{
    private readonly Optional<Error2> _error2Value;

    private readonly Optional<Error2ContentstackEnvironmentsApi> _error2ContentstackEnvironmentsApiValue;

    private RevalidateCacheError(Optional<Error2> error2Value,
        Optional<Error2ContentstackEnvironmentsApi> error2ContentstackEnvironmentsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error2Value = error2Value;
        _error2ContentstackEnvironmentsApiValue = error2ContentstackEnvironmentsApiValue;
    }

    private static RevalidateCacheError AsError2(Error2 value) => new(Optional<Error2>.Some(value), default, default);

    private static RevalidateCacheError AsError2ContentstackEnvironmentsApi(Error2ContentstackEnvironmentsApi value) =>
        new(default, Optional<Error2ContentstackEnvironmentsApi>.Some(value), default);

    private static RevalidateCacheError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError2([NotNullWhen(true)] out Error2? value) => _error2Value.TryGetValue(out value);

    public bool TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value) =>
        _error2ContentstackEnvironmentsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error2, TResult> onError2,
        Func<Error2ContentstackEnvironmentsApi, TResult> onError2ContentstackEnvironmentsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError2(out var error2Value) => onError2(error2Value),
            _ when TryGetError2ContentstackEnvironmentsApi(
                out var error2ContentstackEnvironmentsApiValue) => onError2ContentstackEnvironmentsApi(
                error2ContentstackEnvironmentsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RevalidateCacheError)} holds no value.")
        };

    public void Match(Action<Error2> onError2,
        Action<Error2ContentstackEnvironmentsApi> onError2ContentstackEnvironmentsApi,
        Action<RawError> otherwise)
    {
        if (TryGetError2(out var error2Value)) onError2(error2Value);
        else if (TryGetError2ContentstackEnvironmentsApi(
            out var error2ContentstackEnvironmentsApiValue)) onError2ContentstackEnvironmentsApi(
            error2ContentstackEnvironmentsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RevalidateCacheError)} holds no value.");
    }

    private static Task<RevalidateCacheError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error2>().As(AsError2),
            404 => response.Json<Error2ContentstackEnvironmentsApi>().As(AsError2ContentstackEnvironmentsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RevalidateCacheError> Response { get; } = new(Create);
}
