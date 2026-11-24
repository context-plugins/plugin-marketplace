using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class CreateSearchJobsSearchPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<JobsSearch401Error1> _jobsSearch401Error1Value;

    private readonly Optional<string> _stringValue;

    private CreateSearchJobsSearchPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<JobsSearch401Error1> jobsSearch401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _jobsSearch401Error1Value = jobsSearch401Error1Value;
        _stringValue = stringValue;
    }

    private static CreateSearchJobsSearchPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static CreateSearchJobsSearchPostError AsJobsSearch401Error1(JobsSearch401Error1 value) =>
        new(default, Optional<JobsSearch401Error1>.Some(value), default, default);

    private static CreateSearchJobsSearchPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static CreateSearchJobsSearchPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetJobsSearch401Error1([NotNullWhen(true)] out JobsSearch401Error1? value) =>
        _jobsSearch401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<JobsSearch401Error1, TResult> onJobsSearch401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetJobsSearch401Error1(out var jobsSearch401Error1Value) => onJobsSearch401Error1(
                jobsSearch401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateSearchJobsSearchPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<JobsSearch401Error1> onJobsSearch401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetJobsSearch401Error1(out var jobsSearch401Error1Value)) onJobsSearch401Error1(
            jobsSearch401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateSearchJobsSearchPostError)} holds no value.");
    }

    private static Task<CreateSearchJobsSearchPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<JobsSearch401Error1>().As(AsJobsSearch401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateSearchJobsSearchPostError> Response { get; } = new(Create);
}
