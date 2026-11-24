using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class GetSingleEntryVariantError : ApiError
{
    private readonly Optional<ErrorContentstackAssetsApi> _errorContentstackAssetsApiValue;

    private GetSingleEntryVariantError(Optional<ErrorContentstackAssetsApi> errorContentstackAssetsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorContentstackAssetsApiValue = errorContentstackAssetsApiValue;
    }

    private static GetSingleEntryVariantError AsErrorContentstackAssetsApi(ErrorContentstackAssetsApi value) =>
        new(Optional<ErrorContentstackAssetsApi>.Some(value), default);

    private static GetSingleEntryVariantError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value) =>
        _errorContentstackAssetsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorContentstackAssetsApi, TResult> onErrorContentstackAssetsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorContentstackAssetsApi(
                out var errorContentstackAssetsApiValue) => onErrorContentstackAssetsApi(
                errorContentstackAssetsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSingleEntryVariantError)} holds no value.")
        };

    public void Match(Action<ErrorContentstackAssetsApi> onErrorContentstackAssetsApi, Action<RawError> otherwise)
    {
        if (TryGetErrorContentstackAssetsApi(out var errorContentstackAssetsApiValue)) onErrorContentstackAssetsApi(
            errorContentstackAssetsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSingleEntryVariantError)} holds no value.");
    }

    private static Task<GetSingleEntryVariantError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ErrorContentstackAssetsApi>().As(AsErrorContentstackAssetsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSingleEntryVariantError> Response { get; } = new(Create);
}
