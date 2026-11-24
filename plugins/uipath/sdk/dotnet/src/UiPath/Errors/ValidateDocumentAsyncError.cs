using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class ValidateDocumentAsyncError : ApiError
{
    private readonly Optional<ErrorResponseUiPathPlatformManagementAuditLogsApi> _errorResponseUiPathPlatformManagementAuditLogsApiValue;

    private ValidateDocumentAsyncError(Optional<ErrorResponseUiPathPlatformManagementAuditLogsApi> errorResponseUiPathPlatformManagementAuditLogsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathPlatformManagementAuditLogsApiValue =
            errorResponseUiPathPlatformManagementAuditLogsApiValue;
    }

    private static ValidateDocumentAsyncError AsErrorResponseUiPathPlatformManagementAuditLogsApi(ErrorResponseUiPathPlatformManagementAuditLogsApi value) =>
        new(Optional<ErrorResponseUiPathPlatformManagementAuditLogsApi>.Some(value), default);

    private static ValidateDocumentAsyncError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value) =>
        _errorResponseUiPathPlatformManagementAuditLogsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseUiPathPlatformManagementAuditLogsApi, TResult> onErrorResponseUiPathPlatformManagementAuditLogsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(
                out var errorResponseUiPathPlatformManagementAuditLogsApiValue) => onErrorResponseUiPathPlatformManagementAuditLogsApi(
                errorResponseUiPathPlatformManagementAuditLogsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ValidateDocumentAsyncError)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathPlatformManagementAuditLogsApi> onErrorResponseUiPathPlatformManagementAuditLogsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(
            out var errorResponseUiPathPlatformManagementAuditLogsApiValue)) onErrorResponseUiPathPlatformManagementAuditLogsApi(
            errorResponseUiPathPlatformManagementAuditLogsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ValidateDocumentAsyncError)} holds no value.");
    }

    private static Task<ValidateDocumentAsyncError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<ErrorResponseUiPathPlatformManagementAuditLogsApi>().As(
                AsErrorResponseUiPathPlatformManagementAuditLogsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ValidateDocumentAsyncError> Response { get; } = new(Create);
}
