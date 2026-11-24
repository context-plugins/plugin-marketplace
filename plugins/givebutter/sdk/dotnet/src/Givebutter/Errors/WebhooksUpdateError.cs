using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class WebhooksUpdateError : ApiError
{
    private readonly Optional<ModelNotFoundException1> _modelNotFoundException1Value;

    private readonly Optional<ValidationException1> _validationException1Value;

    private WebhooksUpdateError(Optional<ModelNotFoundException1> modelNotFoundException1Value,
        Optional<ValidationException1> validationException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _modelNotFoundException1Value = modelNotFoundException1Value;
        _validationException1Value = validationException1Value;
    }

    private static WebhooksUpdateError AsModelNotFoundException1(ModelNotFoundException1 value) =>
        new(Optional<ModelNotFoundException1>.Some(value), default, default);

    private static WebhooksUpdateError AsValidationException1(ValidationException1 value) =>
        new(default, Optional<ValidationException1>.Some(value), default);

    private static WebhooksUpdateError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value) =>
        _modelNotFoundException1Value.TryGetValue(out value);

    public bool TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value) =>
        _validationException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ModelNotFoundException1, TResult> onModelNotFoundException1,
        Func<ValidationException1, TResult> onValidationException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModelNotFoundException1(out var modelNotFoundException1Value) => onModelNotFoundException1(
                modelNotFoundException1Value),
            _ when TryGetValidationException1(out var validationException1Value) => onValidationException1(
                validationException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(WebhooksUpdateError)} holds no value.")
        };

    public void Match(Action<ModelNotFoundException1> onModelNotFoundException1,
        Action<ValidationException1> onValidationException1,
        Action<RawError> otherwise)
    {
        if (TryGetModelNotFoundException1(out var modelNotFoundException1Value)) onModelNotFoundException1(
            modelNotFoundException1Value);
        else if (TryGetValidationException1(out var validationException1Value)) onValidationException1(
            validationException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(WebhooksUpdateError)} holds no value.");
    }

    private static Task<WebhooksUpdateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ModelNotFoundException1>().As(AsModelNotFoundException1),
            422 => response.Json<ValidationException1>().As(AsValidationException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<WebhooksUpdateError> Response { get; } = new(Create);
}
