using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Asana.Core.ErrorResponse;
using Asana.Core.Models;

namespace Asana.Errors;

public sealed class TriggerRuleError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private TriggerRuleError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static TriggerRuleError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static TriggerRuleError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TriggerRuleError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TriggerRuleError)} holds no value.");
    }

    private static Task<TriggerRuleError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 500 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TriggerRuleError> Response { get; } = new(Create);
}
