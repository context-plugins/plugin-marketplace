using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonComprehend.Core.ErrorResponse;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Errors;

public sealed class StopTargetedSentimentDetectionJobError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private StopTargetedSentimentDetectionJobError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static StopTargetedSentimentDetectionJobError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static StopTargetedSentimentDetectionJobError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(StopTargetedSentimentDetectionJobError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StopTargetedSentimentDetectionJobError)} holds no value.");
    }

    private static Task<StopTargetedSentimentDetectionJobError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 500 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StopTargetedSentimentDetectionJobError> Response { get; } = new(Create);
}
