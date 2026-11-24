using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Audioscrape.Core.ErrorResponse;
using Audioscrape.Core.Models;
using Audioscrape.Models;

namespace Audioscrape.Errors;

public sealed class GetChartPodcastsError : ApiError
{
    private readonly Optional<ApiErrorBody> _apiErrorBodyValue;

    private GetChartPodcastsError(Optional<ApiErrorBody> apiErrorBodyValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorBodyValue = apiErrorBodyValue;
    }

    private static GetChartPodcastsError AsApiErrorBody(ApiErrorBody value) =>
        new(Optional<ApiErrorBody>.Some(value), default);

    private static GetChartPodcastsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value) =>
        _apiErrorBodyValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorBody, TResult> onApiErrorBody, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorBody(out var apiErrorBodyValue) => onApiErrorBody(apiErrorBodyValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetChartPodcastsError)} holds no value.")
        };

    public void Match(Action<ApiErrorBody> onApiErrorBody, Action<RawError> otherwise)
    {
        if (TryGetApiErrorBody(out var apiErrorBodyValue)) onApiErrorBody(apiErrorBodyValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetChartPodcastsError)} holds no value.");
    }

    private static Task<GetChartPodcastsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 402 or 403 or 429 => response.Json<ApiErrorBody>().As(AsApiErrorBody),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetChartPodcastsError> Response { get; } = new(Create);
}
