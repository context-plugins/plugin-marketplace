using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class PostJobMfaError : ApiError
{
    private readonly Optional<JobsMfa400Error1> _jobsMfa400Error1Value;

    private readonly Optional<JobsMfa401Error1> _jobsMfa401Error1Value;

    private readonly Optional<JobsMfa403Error1> _jobsMfa403Error1Value;

    private readonly Optional<JobsMfa404Error1> _jobsMfa404Error1Value;

    private readonly Optional<JobsMfa500Error1> _jobsMfa500Error1Value;

    private PostJobMfaError(Optional<JobsMfa400Error1> jobsMfa400Error1Value,
        Optional<JobsMfa401Error1> jobsMfa401Error1Value,
        Optional<JobsMfa403Error1> jobsMfa403Error1Value,
        Optional<JobsMfa404Error1> jobsMfa404Error1Value,
        Optional<JobsMfa500Error1> jobsMfa500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _jobsMfa400Error1Value = jobsMfa400Error1Value;
        _jobsMfa401Error1Value = jobsMfa401Error1Value;
        _jobsMfa403Error1Value = jobsMfa403Error1Value;
        _jobsMfa404Error1Value = jobsMfa404Error1Value;
        _jobsMfa500Error1Value = jobsMfa500Error1Value;
    }

    private static PostJobMfaError AsJobsMfa400Error1(JobsMfa400Error1 value) =>
        new(Optional<JobsMfa400Error1>.Some(value), default, default, default, default, default);

    private static PostJobMfaError AsJobsMfa401Error1(JobsMfa401Error1 value) =>
        new(default, Optional<JobsMfa401Error1>.Some(value), default, default, default, default);

    private static PostJobMfaError AsJobsMfa403Error1(JobsMfa403Error1 value) =>
        new(default, default, Optional<JobsMfa403Error1>.Some(value), default, default, default);

    private static PostJobMfaError AsJobsMfa404Error1(JobsMfa404Error1 value) =>
        new(default, default, default, Optional<JobsMfa404Error1>.Some(value), default, default);

    private static PostJobMfaError AsJobsMfa500Error1(JobsMfa500Error1 value) =>
        new(default, default, default, default, Optional<JobsMfa500Error1>.Some(value), default);

    private static PostJobMfaError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetJobsMfa400Error1([NotNullWhen(true)] out JobsMfa400Error1? value) =>
        _jobsMfa400Error1Value.TryGetValue(out value);

    public bool TryGetJobsMfa401Error1([NotNullWhen(true)] out JobsMfa401Error1? value) =>
        _jobsMfa401Error1Value.TryGetValue(out value);

    public bool TryGetJobsMfa403Error1([NotNullWhen(true)] out JobsMfa403Error1? value) =>
        _jobsMfa403Error1Value.TryGetValue(out value);

    public bool TryGetJobsMfa404Error1([NotNullWhen(true)] out JobsMfa404Error1? value) =>
        _jobsMfa404Error1Value.TryGetValue(out value);

    public bool TryGetJobsMfa500Error1([NotNullWhen(true)] out JobsMfa500Error1? value) =>
        _jobsMfa500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<JobsMfa400Error1, TResult> onJobsMfa400Error1,
        Func<JobsMfa401Error1, TResult> onJobsMfa401Error1,
        Func<JobsMfa403Error1, TResult> onJobsMfa403Error1,
        Func<JobsMfa404Error1, TResult> onJobsMfa404Error1,
        Func<JobsMfa500Error1, TResult> onJobsMfa500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobsMfa400Error1(out var jobsMfa400Error1Value) => onJobsMfa400Error1(jobsMfa400Error1Value),
            _ when TryGetJobsMfa401Error1(out var jobsMfa401Error1Value) => onJobsMfa401Error1(jobsMfa401Error1Value),
            _ when TryGetJobsMfa403Error1(out var jobsMfa403Error1Value) => onJobsMfa403Error1(jobsMfa403Error1Value),
            _ when TryGetJobsMfa404Error1(out var jobsMfa404Error1Value) => onJobsMfa404Error1(jobsMfa404Error1Value),
            _ when TryGetJobsMfa500Error1(out var jobsMfa500Error1Value) => onJobsMfa500Error1(jobsMfa500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostJobMfaError)} holds no value.")
        };

    public void Match(Action<JobsMfa400Error1> onJobsMfa400Error1,
        Action<JobsMfa401Error1> onJobsMfa401Error1,
        Action<JobsMfa403Error1> onJobsMfa403Error1,
        Action<JobsMfa404Error1> onJobsMfa404Error1,
        Action<JobsMfa500Error1> onJobsMfa500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetJobsMfa400Error1(out var jobsMfa400Error1Value)) onJobsMfa400Error1(jobsMfa400Error1Value);
        else if (TryGetJobsMfa401Error1(out var jobsMfa401Error1Value)) onJobsMfa401Error1(jobsMfa401Error1Value);
        else if (TryGetJobsMfa403Error1(out var jobsMfa403Error1Value)) onJobsMfa403Error1(jobsMfa403Error1Value);
        else if (TryGetJobsMfa404Error1(out var jobsMfa404Error1Value)) onJobsMfa404Error1(jobsMfa404Error1Value);
        else if (TryGetJobsMfa500Error1(out var jobsMfa500Error1Value)) onJobsMfa500Error1(jobsMfa500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostJobMfaError)} holds no value.");
    }

    private static Task<PostJobMfaError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<JobsMfa400Error1>().As(AsJobsMfa400Error1),
            401 => response.Json<JobsMfa401Error1>().As(AsJobsMfa401Error1),
            403 => response.Json<JobsMfa403Error1>().As(AsJobsMfa403Error1),
            404 => response.Json<JobsMfa404Error1>().As(AsJobsMfa404Error1),
            500 => response.Json<JobsMfa500Error1>().As(AsJobsMfa500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostJobMfaError> Response { get; } = new(Create);
}
