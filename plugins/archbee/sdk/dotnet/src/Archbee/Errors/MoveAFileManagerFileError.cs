using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class MoveAFileManagerFileError : ApiError
{
    private readonly Optional<FileManagerMove400Error1> _fileManagerMove400Error1Value;

    private MoveAFileManagerFileError(Optional<FileManagerMove400Error1> fileManagerMove400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _fileManagerMove400Error1Value = fileManagerMove400Error1Value;
    }

    private static MoveAFileManagerFileError AsFileManagerMove400Error1(FileManagerMove400Error1 value) =>
        new(Optional<FileManagerMove400Error1>.Some(value), default);

    private static MoveAFileManagerFileError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetFileManagerMove400Error1([NotNullWhen(true)] out FileManagerMove400Error1? value) =>
        _fileManagerMove400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<FileManagerMove400Error1, TResult> onFileManagerMove400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFileManagerMove400Error1(out var fileManagerMove400Error1Value) => onFileManagerMove400Error1(
                fileManagerMove400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MoveAFileManagerFileError)} holds no value.")
        };

    public void Match(Action<FileManagerMove400Error1> onFileManagerMove400Error1, Action<RawError> otherwise)
    {
        if (TryGetFileManagerMove400Error1(out var fileManagerMove400Error1Value)) onFileManagerMove400Error1(
            fileManagerMove400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MoveAFileManagerFileError)} holds no value.");
    }

    private static Task<MoveAFileManagerFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<FileManagerMove400Error1>().As(AsFileManagerMove400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MoveAFileManagerFileError> Response { get; } = new(Create);
}
