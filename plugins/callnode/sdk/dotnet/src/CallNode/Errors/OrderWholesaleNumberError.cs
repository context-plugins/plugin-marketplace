using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CallNode.Core.ErrorResponse;
using CallNode.Core.Models;

namespace CallNode.Errors;

public sealed class OrderWholesaleNumberError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private OrderWholesaleNumberError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static OrderWholesaleNumberError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static OrderWholesaleNumberError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrderWholesaleNumberError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrderWholesaleNumberError)} holds no value.");
    }

    private static Task<OrderWholesaleNumberError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 402 or 403 or 502 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrderWholesaleNumberError> Response { get; } = new(Create);
}
