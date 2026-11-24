using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Semrush.Core.ErrorResponse;
using Semrush.Core.Models;

namespace Semrush.Errors;

public sealed class GetApisV4HermesV0SubscriptionsError : ApiError
{
    private readonly Optional<string> _stringValue;

    private GetApisV4HermesV0SubscriptionsError(Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _stringValue = stringValue;
    }

    private static GetApisV4HermesV0SubscriptionsError AsString(string value) =>
        new(Optional<string>.Some(value), default);

    private static GetApisV4HermesV0SubscriptionsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetApisV4HermesV0SubscriptionsError)} holds no value.")
        };

    public void Match(Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetApisV4HermesV0SubscriptionsError)} holds no value.");
    }

    private static Task<GetApisV4HermesV0SubscriptionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetApisV4HermesV0SubscriptionsError> Response { get; } = new(Create);
}
