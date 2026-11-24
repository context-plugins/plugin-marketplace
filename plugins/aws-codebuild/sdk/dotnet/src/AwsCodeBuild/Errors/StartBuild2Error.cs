using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsCodeBuild.Core.ErrorResponse;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Errors;

public sealed class StartBuild2Error : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private StartBuild2Error(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static StartBuild2Error AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static StartBuild2Error AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(StartBuild2Error)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StartBuild2Error)} holds no value.");
    }

    private static Task<StartBuild2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StartBuild2Error> Response { get; } = new(Create);
}
