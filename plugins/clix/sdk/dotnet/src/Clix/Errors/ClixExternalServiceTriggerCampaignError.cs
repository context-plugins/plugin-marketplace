using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Clix.Core.ErrorResponse;
using Clix.Core.Models;

namespace Clix.Errors;

public sealed class ClixExternalServiceTriggerCampaignError : ApiError
{
    private readonly Optional<string> _stringValue;

    private ClixExternalServiceTriggerCampaignError(Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _stringValue = stringValue;
    }

    private static ClixExternalServiceTriggerCampaignError AsString(string value) =>
        new(Optional<string>.Some(value), default);

    private static ClixExternalServiceTriggerCampaignError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(ClixExternalServiceTriggerCampaignError)} holds no value.")
        };

    public void Match(Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ClixExternalServiceTriggerCampaignError)} holds no value.");
    }

    private static Task<ClixExternalServiceTriggerCampaignError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Scalar(s => s).As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ClixExternalServiceTriggerCampaignError> Response { get; } = new(Create);
}
