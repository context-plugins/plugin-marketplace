using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetWebhooksError : ApiError
{
    private readonly Optional<Error401Authorization> _error401AuthorizationValue;

    private readonly Optional<string> _stringValue;

    private GetWebhooksError(Optional<Error401Authorization> error401AuthorizationValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error401AuthorizationValue = error401AuthorizationValue;
        _stringValue = stringValue;
    }

    private static GetWebhooksError AsError401Authorization(Error401Authorization value) =>
        new(Optional<Error401Authorization>.Some(value), default, default);

    private static GetWebhooksError AsString(string value) => new(default, Optional<string>.Some(value), default);

    private static GetWebhooksError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value) =>
        _error401AuthorizationValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error401Authorization, TResult> onError401Authorization,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError401Authorization(out var error401AuthorizationValue) => onError401Authorization(
                error401AuthorizationValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetWebhooksError)} holds no value.")
        };

    public void Match(Action<Error401Authorization> onError401Authorization,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError401Authorization(out var error401AuthorizationValue)) onError401Authorization(
            error401AuthorizationValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetWebhooksError)} holds no value.");
    }

    private static Task<GetWebhooksError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error401Authorization>().As(AsError401Authorization),
            404 or 500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetWebhooksError> Response { get; } = new(Create);
}
