using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class GetExperienceError : ApiError
{
    private readonly Optional<ErrorContentstackPersonalizeManagementAttributesApi> _errorContentstackPersonalizeManagementAttributesApiValue;

    private GetExperienceError(Optional<ErrorContentstackPersonalizeManagementAttributesApi> errorContentstackPersonalizeManagementAttributesApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorContentstackPersonalizeManagementAttributesApiValue =
            errorContentstackPersonalizeManagementAttributesApiValue;
    }

    private static GetExperienceError AsErrorContentstackPersonalizeManagementAttributesApi(ErrorContentstackPersonalizeManagementAttributesApi value) =>
        new(Optional<ErrorContentstackPersonalizeManagementAttributesApi>.Some(value), default);

    private static GetExperienceError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value) =>
        _errorContentstackPersonalizeManagementAttributesApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorContentstackPersonalizeManagementAttributesApi, TResult> onErrorContentstackPersonalizeManagementAttributesApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorContentstackPersonalizeManagementAttributesApi(
                out var errorContentstackPersonalizeManagementAttributesApiValue) => onErrorContentstackPersonalizeManagementAttributesApi(
                errorContentstackPersonalizeManagementAttributesApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetExperienceError)} holds no value.")
        };

    public void Match(Action<ErrorContentstackPersonalizeManagementAttributesApi> onErrorContentstackPersonalizeManagementAttributesApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorContentstackPersonalizeManagementAttributesApi(
            out var errorContentstackPersonalizeManagementAttributesApiValue)) onErrorContentstackPersonalizeManagementAttributesApi(
            errorContentstackPersonalizeManagementAttributesApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetExperienceError)} holds no value.");
    }

    private static Task<GetExperienceError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ErrorContentstackPersonalizeManagementAttributesApi>().As(
                AsErrorContentstackPersonalizeManagementAttributesApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetExperienceError> Response { get; } = new(Create);
}
