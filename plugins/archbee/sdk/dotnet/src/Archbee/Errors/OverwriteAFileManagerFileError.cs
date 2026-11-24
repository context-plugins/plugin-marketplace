using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class OverwriteAFileManagerFileError : ApiError
{
    private readonly Optional<FileManagerReplace400Error1> _fileManagerReplace400Error1Value;

    private OverwriteAFileManagerFileError(Optional<FileManagerReplace400Error1> fileManagerReplace400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _fileManagerReplace400Error1Value = fileManagerReplace400Error1Value;
    }

    private static OverwriteAFileManagerFileError AsFileManagerReplace400Error1(FileManagerReplace400Error1 value) =>
        new(Optional<FileManagerReplace400Error1>.Some(value), default);

    private static OverwriteAFileManagerFileError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetFileManagerReplace400Error1([NotNullWhen(true)] out FileManagerReplace400Error1? value) =>
        _fileManagerReplace400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<FileManagerReplace400Error1, TResult> onFileManagerReplace400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFileManagerReplace400Error1(
                out var fileManagerReplace400Error1Value) => onFileManagerReplace400Error1(
                fileManagerReplace400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OverwriteAFileManagerFileError)} holds no value.")
        };

    public void Match(Action<FileManagerReplace400Error1> onFileManagerReplace400Error1, Action<RawError> otherwise)
    {
        if (TryGetFileManagerReplace400Error1(out var fileManagerReplace400Error1Value)) onFileManagerReplace400Error1(
            fileManagerReplace400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OverwriteAFileManagerFileError)} holds no value.");
    }

    private static Task<OverwriteAFileManagerFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<FileManagerReplace400Error1>().As(AsFileManagerReplace400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OverwriteAFileManagerFileError> Response { get; } = new(Create);
}
