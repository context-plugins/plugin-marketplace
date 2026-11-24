using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class UpdateExperiencePriorityError : ApiError
{
    private readonly Optional<ErrorContentstackPersonalizeManagementAttributesApi> _errorContentstackPersonalizeManagementAttributesApiValue;

    private UpdateExperiencePriorityError(Optional<ErrorContentstackPersonalizeManagementAttributesApi> errorContentstackPersonalizeManagementAttributesApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorContentstackPersonalizeManagementAttributesApiValue =
            errorContentstackPersonalizeManagementAttributesApiValue;
    }

    private static UpdateExperiencePriorityError AsErrorContentstackPersonalizeManagementAttributesApi(ErrorContentstackPersonalizeManagementAttributesApi value) =>
        new(Optional<ErrorContentstackPersonalizeManagementAttributesApi>.Some(value), default);

    private static UpdateExperiencePriorityError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(UpdateExperiencePriorityError)} holds no value.")
        };

    public void Match(Action<ErrorContentstackPersonalizeManagementAttributesApi> onErrorContentstackPersonalizeManagementAttributesApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorContentstackPersonalizeManagementAttributesApi(
            out var errorContentstackPersonalizeManagementAttributesApiValue)) onErrorContentstackPersonalizeManagementAttributesApi(
            errorContentstackPersonalizeManagementAttributesApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateExperiencePriorityError)} holds no value.");
    }

    private static Task<UpdateExperiencePriorityError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorContentstackPersonalizeManagementAttributesApi>().As(
                AsErrorContentstackPersonalizeManagementAttributesApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateExperiencePriorityError> Response { get; } = new(Create);
}
