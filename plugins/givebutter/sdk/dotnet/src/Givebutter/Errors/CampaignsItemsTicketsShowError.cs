using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class CampaignsItemsTicketsShowError : ApiError
{
    private readonly Optional<ModelNotFoundException1> _modelNotFoundException1Value;

    private CampaignsItemsTicketsShowError(Optional<ModelNotFoundException1> modelNotFoundException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _modelNotFoundException1Value = modelNotFoundException1Value;
    }

    private static CampaignsItemsTicketsShowError AsModelNotFoundException1(ModelNotFoundException1 value) =>
        new(Optional<ModelNotFoundException1>.Some(value), default);

    private static CampaignsItemsTicketsShowError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value) =>
        _modelNotFoundException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ModelNotFoundException1, TResult> onModelNotFoundException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModelNotFoundException1(out var modelNotFoundException1Value) => onModelNotFoundException1(
                modelNotFoundException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CampaignsItemsTicketsShowError)} holds no value.")
        };

    public void Match(Action<ModelNotFoundException1> onModelNotFoundException1, Action<RawError> otherwise)
    {
        if (TryGetModelNotFoundException1(out var modelNotFoundException1Value)) onModelNotFoundException1(
            modelNotFoundException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CampaignsItemsTicketsShowError)} holds no value.");
    }

    private static Task<CampaignsItemsTicketsShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ModelNotFoundException1>().As(AsModelNotFoundException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CampaignsItemsTicketsShowError> Response { get; } = new(Create);
}
