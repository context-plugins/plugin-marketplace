using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Apibara.Core.ErrorResponse;
using Apibara.Core.Models;
using Apibara.Models;

namespace Apibara.Errors;

public sealed class ProxyAuctionImageError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<RawError> _noContentValue;

    private ProxyAuctionImageError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
        _noContentValue = noContentValue;
    }

    private static ProxyAuctionImageError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default, default);

    private static ProxyAuctionImageError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static ProxyAuctionImageError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ProxyAuctionImageError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ProxyAuctionImageError)} holds no value.");
    }

    private static Task<ProxyAuctionImageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 429 or 500 => response.RawBody().As(AsNoContent),
            403 or 404 or 422 or 503 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ProxyAuctionImageError> Response { get; } = new(Create);
}
