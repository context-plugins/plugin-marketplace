using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonForecast.Core.ErrorResponse;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Errors;

public sealed class ListWhatIfAnalysesError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private ListWhatIfAnalysesError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static ListWhatIfAnalysesError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static ListWhatIfAnalysesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListWhatIfAnalysesError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListWhatIfAnalysesError)} holds no value.");
    }

    private static Task<ListWhatIfAnalysesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListWhatIfAnalysesError> Response { get; } = new(Create);
}
