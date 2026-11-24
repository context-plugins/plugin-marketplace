using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class AddNotificationRecipientError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi> _errorResponseBusinessCentralAdministrationCenterNotificationsApiValue;

    private AddNotificationRecipientError(Optional<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi> errorResponseBusinessCentralAdministrationCenterNotificationsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterNotificationsApiValue =
            errorResponseBusinessCentralAdministrationCenterNotificationsApiValue;
    }

    private static AddNotificationRecipientError AsErrorResponseBusinessCentralAdministrationCenterNotificationsApi(ErrorResponseBusinessCentralAdministrationCenterNotificationsApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi>.Some(value), default);

    private static AddNotificationRecipientError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterNotificationsApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterNotificationsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi, TResult> onErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi(
                out var errorResponseBusinessCentralAdministrationCenterNotificationsApiValue) => onErrorResponseBusinessCentralAdministrationCenterNotificationsApi(
                errorResponseBusinessCentralAdministrationCenterNotificationsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AddNotificationRecipientError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi> onErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi(
            out var errorResponseBusinessCentralAdministrationCenterNotificationsApiValue)) onErrorResponseBusinessCentralAdministrationCenterNotificationsApi(
            errorResponseBusinessCentralAdministrationCenterNotificationsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AddNotificationRecipientError)} holds no value.");
    }

    private static Task<AddNotificationRecipientError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterNotificationsApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterNotificationsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AddNotificationRecipientError> Response { get; } = new(Create);
}
