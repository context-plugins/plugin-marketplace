using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class UploadSingleFileError : ApiError
{
    private readonly Optional<UploadFile400Error1> _uploadFile400Error1Value;

    private UploadSingleFileError(Optional<UploadFile400Error1> uploadFile400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _uploadFile400Error1Value = uploadFile400Error1Value;
    }

    private static UploadSingleFileError AsUploadFile400Error1(UploadFile400Error1 value) =>
        new(Optional<UploadFile400Error1>.Some(value), default);

    private static UploadSingleFileError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetUploadFile400Error1([NotNullWhen(true)] out UploadFile400Error1? value) =>
        _uploadFile400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UploadFile400Error1, TResult> onUploadFile400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUploadFile400Error1(out var uploadFile400Error1Value) => onUploadFile400Error1(
                uploadFile400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadSingleFileError)} holds no value.")
        };

    public void Match(Action<UploadFile400Error1> onUploadFile400Error1, Action<RawError> otherwise)
    {
        if (TryGetUploadFile400Error1(out var uploadFile400Error1Value)) onUploadFile400Error1(
            uploadFile400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadSingleFileError)} holds no value.");
    }

    private static Task<UploadSingleFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UploadFile400Error1>().As(AsUploadFile400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadSingleFileError> Response { get; } = new(Create);
}
