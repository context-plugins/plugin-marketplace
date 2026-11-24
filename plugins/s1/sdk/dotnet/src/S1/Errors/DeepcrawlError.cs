using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using S1.Core.ErrorResponse;
using S1.Core.Models;
using S1.Models;

namespace S1.Errors;

public sealed class DeepcrawlError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private DeepcrawlError(Optional<ApiErrorModel> apiErrorModelValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static DeepcrawlError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default);

    private static DeepcrawlError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeepcrawlError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeepcrawlError)} holds no value.");
    }

    private static Task<DeepcrawlError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 402 or 422 or 429 or 500 or 502 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeepcrawlError> Response { get; } = new(Create);
}
