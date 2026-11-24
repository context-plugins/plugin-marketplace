using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models;

namespace AtlassianCompass.Errors;

public sealed class HandleWebhookInvocationError : ApiError
{
    private readonly Optional<ErrorResponseDto> _errorResponseDtoValue;

    private readonly Optional<string> _stringValue;

    private HandleWebhookInvocationError(Optional<ErrorResponseDto> errorResponseDtoValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseDtoValue = errorResponseDtoValue;
        _stringValue = stringValue;
    }

    private static HandleWebhookInvocationError AsErrorResponseDto(ErrorResponseDto value) =>
        new(Optional<ErrorResponseDto>.Some(value), default, default);

    private static HandleWebhookInvocationError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static HandleWebhookInvocationError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value) =>
        _errorResponseDtoValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseDto, TResult> onErrorResponseDto,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseDto(out var errorResponseDtoValue) => onErrorResponseDto(errorResponseDtoValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(HandleWebhookInvocationError)} holds no value.")
        };

    public void Match(Action<ErrorResponseDto> onErrorResponseDto, Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseDto(out var errorResponseDtoValue)) onErrorResponseDto(errorResponseDtoValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(HandleWebhookInvocationError)} holds no value.");
    }

    private static Task<HandleWebhookInvocationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 405 => response.Json<ErrorResponseDto>().As(AsErrorResponseDto),
            429 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<HandleWebhookInvocationError> Response { get; } = new(Create);
}
