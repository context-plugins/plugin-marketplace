using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonForecast.Core.ErrorResponse;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Errors;

public sealed class UpdateDatasetGroupError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private UpdateDatasetGroupError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static UpdateDatasetGroupError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static UpdateDatasetGroupError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateDatasetGroupError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateDatasetGroupError)} holds no value.");
    }

    private static Task<UpdateDatasetGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 409 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateDatasetGroupError> Response { get; } = new(Create);
}
