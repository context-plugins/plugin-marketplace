using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hud.Core.ErrorResponse;
using Hud.Core.Models;
using Hud.Models;

namespace Hud.Errors;

public sealed class ListMemberSecretsV2MemberSecretsGetError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private ListMemberSecretsV2MemberSecretsGetError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static ListMemberSecretsV2MemberSecretsGetError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static ListMemberSecretsV2MemberSecretsGetError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(ListMemberSecretsV2MemberSecretsGetError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListMemberSecretsV2MemberSecretsGetError)} holds no value.");
    }

    private static Task<ListMemberSecretsV2MemberSecretsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 409 or 429 or 503 => response.Json<ErrorResponseModel>().As(
                AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListMemberSecretsV2MemberSecretsGetError> Response { get; } = new(Create);
}
