using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class DeleteAFileManagerFileError : ApiError
{
    private readonly Optional<FileManagerFile400Error1> _fileManagerFile400Error1Value;

    private DeleteAFileManagerFileError(Optional<FileManagerFile400Error1> fileManagerFile400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _fileManagerFile400Error1Value = fileManagerFile400Error1Value;
    }

    private static DeleteAFileManagerFileError AsFileManagerFile400Error1(FileManagerFile400Error1 value) =>
        new(Optional<FileManagerFile400Error1>.Some(value), default);

    private static DeleteAFileManagerFileError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetFileManagerFile400Error1([NotNullWhen(true)] out FileManagerFile400Error1? value) =>
        _fileManagerFile400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<FileManagerFile400Error1, TResult> onFileManagerFile400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFileManagerFile400Error1(out var fileManagerFile400Error1Value) => onFileManagerFile400Error1(
                fileManagerFile400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteAFileManagerFileError)} holds no value.")
        };

    public void Match(Action<FileManagerFile400Error1> onFileManagerFile400Error1, Action<RawError> otherwise)
    {
        if (TryGetFileManagerFile400Error1(out var fileManagerFile400Error1Value)) onFileManagerFile400Error1(
            fileManagerFile400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteAFileManagerFileError)} holds no value.");
    }

    private static Task<DeleteAFileManagerFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<FileManagerFile400Error1>().As(AsFileManagerFile400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteAFileManagerFileError> Response { get; } = new(Create);
}
