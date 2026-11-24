using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Semrush.Core.ErrorResponse;
using Semrush.Core.Models;

namespace Semrush.Errors;

public sealed class PostAppCenterApiV2JwtTokenError : ApiError
{
    private readonly Optional<string> _stringValue;

    private PostAppCenterApiV2JwtTokenError(Optional<string> stringValue, Optional<RawError> fallback) : base(fallback)
    {
        _stringValue = stringValue;
    }

    private static PostAppCenterApiV2JwtTokenError AsString(string value) => new(Optional<string>.Some(value), default);

    private static PostAppCenterApiV2JwtTokenError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostAppCenterApiV2JwtTokenError)} holds no value.")
        };

    public void Match(Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostAppCenterApiV2JwtTokenError)} holds no value.");
    }

    private static Task<PostAppCenterApiV2JwtTokenError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostAppCenterApiV2JwtTokenError> Response { get; } = new(Create);
}
