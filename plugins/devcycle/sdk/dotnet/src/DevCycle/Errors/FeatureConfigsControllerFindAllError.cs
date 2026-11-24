using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;

namespace DevCycle.Errors;

public sealed class FeatureConfigsControllerFindAllError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private FeatureConfigsControllerFindAllError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static FeatureConfigsControllerFindAllError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static FeatureConfigsControllerFindAllError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(FeatureConfigsControllerFindAllError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(FeatureConfigsControllerFindAllError)} holds no value.");
    }

    private static Task<FeatureConfigsControllerFindAllError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<FeatureConfigsControllerFindAllError> Response { get; } = new(Create);
}
