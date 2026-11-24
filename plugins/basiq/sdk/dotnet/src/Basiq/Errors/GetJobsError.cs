using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetJobsError : ApiError
{
    private readonly Optional<Jobs400Error1> _jobs400Error1Value;

    private readonly Optional<Jobs401Error1> _jobs401Error1Value;

    private readonly Optional<Jobs403Error1> _jobs403Error1Value;

    private readonly Optional<Jobs404Error1> _jobs404Error1Value;

    private readonly Optional<Jobs500Error1> _jobs500Error1Value;

    private GetJobsError(Optional<Jobs400Error1> jobs400Error1Value,
        Optional<Jobs401Error1> jobs401Error1Value,
        Optional<Jobs403Error1> jobs403Error1Value,
        Optional<Jobs404Error1> jobs404Error1Value,
        Optional<Jobs500Error1> jobs500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _jobs400Error1Value = jobs400Error1Value;
        _jobs401Error1Value = jobs401Error1Value;
        _jobs403Error1Value = jobs403Error1Value;
        _jobs404Error1Value = jobs404Error1Value;
        _jobs500Error1Value = jobs500Error1Value;
    }

    private static GetJobsError AsJobs400Error1(Jobs400Error1 value) =>
        new(Optional<Jobs400Error1>.Some(value), default, default, default, default, default);

    private static GetJobsError AsJobs401Error1(Jobs401Error1 value) =>
        new(default, Optional<Jobs401Error1>.Some(value), default, default, default, default);

    private static GetJobsError AsJobs403Error1(Jobs403Error1 value) =>
        new(default, default, Optional<Jobs403Error1>.Some(value), default, default, default);

    private static GetJobsError AsJobs404Error1(Jobs404Error1 value) =>
        new(default, default, default, Optional<Jobs404Error1>.Some(value), default, default);

    private static GetJobsError AsJobs500Error1(Jobs500Error1 value) =>
        new(default, default, default, default, Optional<Jobs500Error1>.Some(value), default);

    private static GetJobsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetJobs400Error1([NotNullWhen(true)] out Jobs400Error1? value) =>
        _jobs400Error1Value.TryGetValue(out value);

    public bool TryGetJobs401Error1([NotNullWhen(true)] out Jobs401Error1? value) =>
        _jobs401Error1Value.TryGetValue(out value);

    public bool TryGetJobs403Error1([NotNullWhen(true)] out Jobs403Error1? value) =>
        _jobs403Error1Value.TryGetValue(out value);

    public bool TryGetJobs404Error1([NotNullWhen(true)] out Jobs404Error1? value) =>
        _jobs404Error1Value.TryGetValue(out value);

    public bool TryGetJobs500Error1([NotNullWhen(true)] out Jobs500Error1? value) =>
        _jobs500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Jobs400Error1, TResult> onJobs400Error1,
        Func<Jobs401Error1, TResult> onJobs401Error1,
        Func<Jobs403Error1, TResult> onJobs403Error1,
        Func<Jobs404Error1, TResult> onJobs404Error1,
        Func<Jobs500Error1, TResult> onJobs500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobs400Error1(out var jobs400Error1Value) => onJobs400Error1(jobs400Error1Value),
            _ when TryGetJobs401Error1(out var jobs401Error1Value) => onJobs401Error1(jobs401Error1Value),
            _ when TryGetJobs403Error1(out var jobs403Error1Value) => onJobs403Error1(jobs403Error1Value),
            _ when TryGetJobs404Error1(out var jobs404Error1Value) => onJobs404Error1(jobs404Error1Value),
            _ when TryGetJobs500Error1(out var jobs500Error1Value) => onJobs500Error1(jobs500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetJobsError)} holds no value.")
        };

    public void Match(Action<Jobs400Error1> onJobs400Error1,
        Action<Jobs401Error1> onJobs401Error1,
        Action<Jobs403Error1> onJobs403Error1,
        Action<Jobs404Error1> onJobs404Error1,
        Action<Jobs500Error1> onJobs500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetJobs400Error1(out var jobs400Error1Value)) onJobs400Error1(jobs400Error1Value);
        else if (TryGetJobs401Error1(out var jobs401Error1Value)) onJobs401Error1(jobs401Error1Value);
        else if (TryGetJobs403Error1(out var jobs403Error1Value)) onJobs403Error1(jobs403Error1Value);
        else if (TryGetJobs404Error1(out var jobs404Error1Value)) onJobs404Error1(jobs404Error1Value);
        else if (TryGetJobs500Error1(out var jobs500Error1Value)) onJobs500Error1(jobs500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetJobsError)} holds no value.");
    }

    private static Task<GetJobsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Jobs400Error1>().As(AsJobs400Error1),
            401 => response.Json<Jobs401Error1>().As(AsJobs401Error1),
            403 => response.Json<Jobs403Error1>().As(AsJobs403Error1),
            404 => response.Json<Jobs404Error1>().As(AsJobs404Error1),
            500 => response.Json<Jobs500Error1>().As(AsJobs500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetJobsError> Response { get; } = new(Create);
}
