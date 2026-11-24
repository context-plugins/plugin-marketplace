using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class CreateEntryError : ApiError
{
    private readonly Optional<Error2> _error2Value;

    private readonly Optional<ErrorContentstackAssetsApi> _errorContentstackAssetsApiValue;

    private CreateEntryError(Optional<Error2> error2Value,
        Optional<ErrorContentstackAssetsApi> errorContentstackAssetsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error2Value = error2Value;
        _errorContentstackAssetsApiValue = errorContentstackAssetsApiValue;
    }

    private static CreateEntryError AsError2(Error2 value) => new(Optional<Error2>.Some(value), default, default);

    private static CreateEntryError AsErrorContentstackAssetsApi(ErrorContentstackAssetsApi value) =>
        new(default, Optional<ErrorContentstackAssetsApi>.Some(value), default);

    private static CreateEntryError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError2([NotNullWhen(true)] out Error2? value) => _error2Value.TryGetValue(out value);

    public bool TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value) =>
        _errorContentstackAssetsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error2, TResult> onError2,
        Func<ErrorContentstackAssetsApi, TResult> onErrorContentstackAssetsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError2(out var error2Value) => onError2(error2Value),
            _ when TryGetErrorContentstackAssetsApi(
                out var errorContentstackAssetsApiValue) => onErrorContentstackAssetsApi(
                errorContentstackAssetsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateEntryError)} holds no value.")
        };

    public void Match(Action<Error2> onError2,
        Action<ErrorContentstackAssetsApi> onErrorContentstackAssetsApi,
        Action<RawError> otherwise)
    {
        if (TryGetError2(out var error2Value)) onError2(error2Value);
        else if (TryGetErrorContentstackAssetsApi(
            out var errorContentstackAssetsApiValue)) onErrorContentstackAssetsApi(errorContentstackAssetsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateEntryError)} holds no value.");
    }

    private static Task<CreateEntryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error2>().As(AsError2),
            401 => response.Json<ErrorContentstackAssetsApi>().As(AsErrorContentstackAssetsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateEntryError> Response { get; } = new(Create);
}
