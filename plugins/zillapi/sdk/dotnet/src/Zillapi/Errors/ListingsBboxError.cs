using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Zillapi.Core.ErrorResponse;
using Zillapi.Core.Models;
using Zillapi.Models;

namespace Zillapi.Errors;

public sealed class ListingsBboxError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private ListingsBboxError(Optional<ApiErrorModel> apiErrorModelValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static ListingsBboxError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default);

    private static ListingsBboxError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListingsBboxError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListingsBboxError)} holds no value.");
    }

    private static Task<ListingsBboxError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListingsBboxError> Response { get; } = new(Create);
}
