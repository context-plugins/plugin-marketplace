using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Semrush.Core.ErrorResponse;
using Semrush.Core.Models;

namespace Semrush.Errors;

public sealed class PostApisV4AppCenterV2PartnerViewerStatusError : ApiError
{
    private readonly Optional<string> _stringValue;

    private PostApisV4AppCenterV2PartnerViewerStatusError(Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _stringValue = stringValue;
    }

    private static PostApisV4AppCenterV2PartnerViewerStatusError AsString(string value) =>
        new(Optional<string>.Some(value), default);

    private static PostApisV4AppCenterV2PartnerViewerStatusError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostApisV4AppCenterV2PartnerViewerStatusError)} holds no value.")
        };

    public void Match(Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PostApisV4AppCenterV2PartnerViewerStatusError)} holds no value.");
    }

    private static Task<PostApisV4AppCenterV2PartnerViewerStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApisV4AppCenterV2PartnerViewerStatusError> Response { get; } = new(Create);
}
