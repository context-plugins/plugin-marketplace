using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class UpdateProfileProfilesProfileIdPatchError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<ProfileNotFoundError> _profileNotFoundErrorValue;

    private UpdateProfileProfilesProfileIdPatchError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<ProfileNotFoundError> profileNotFoundErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _profileNotFoundErrorValue = profileNotFoundErrorValue;
    }

    private static UpdateProfileProfilesProfileIdPatchError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default);

    private static UpdateProfileProfilesProfileIdPatchError AsProfileNotFoundError(ProfileNotFoundError value) =>
        new(default, Optional<ProfileNotFoundError>.Some(value), default);

    private static UpdateProfileProfilesProfileIdPatchError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetProfileNotFoundError([NotNullWhen(true)] out ProfileNotFoundError? value) =>
        _profileNotFoundErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<ProfileNotFoundError, TResult> onProfileNotFoundError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetProfileNotFoundError(out var profileNotFoundErrorValue) => onProfileNotFoundError(
                profileNotFoundErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(UpdateProfileProfilesProfileIdPatchError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<ProfileNotFoundError> onProfileNotFoundError,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetProfileNotFoundError(out var profileNotFoundErrorValue)) onProfileNotFoundError(
            profileNotFoundErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateProfileProfilesProfileIdPatchError)} holds no value.");
    }

    private static Task<UpdateProfileProfilesProfileIdPatchError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ProfileNotFoundError>().As(AsProfileNotFoundError),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateProfileProfilesProfileIdPatchError> Response { get; } = new(Create);
}
