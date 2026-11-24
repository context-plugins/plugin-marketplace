using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class ListFileManagerFilesError : ApiError
{
    private readonly Optional<FileManagerFiles400Error1> _fileManagerFiles400Error1Value;

    private ListFileManagerFilesError(Optional<FileManagerFiles400Error1> fileManagerFiles400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _fileManagerFiles400Error1Value = fileManagerFiles400Error1Value;
    }

    private static ListFileManagerFilesError AsFileManagerFiles400Error1(FileManagerFiles400Error1 value) =>
        new(Optional<FileManagerFiles400Error1>.Some(value), default);

    private static ListFileManagerFilesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetFileManagerFiles400Error1([NotNullWhen(true)] out FileManagerFiles400Error1? value) =>
        _fileManagerFiles400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<FileManagerFiles400Error1, TResult> onFileManagerFiles400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFileManagerFiles400Error1(
                out var fileManagerFiles400Error1Value) => onFileManagerFiles400Error1(fileManagerFiles400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListFileManagerFilesError)} holds no value.")
        };

    public void Match(Action<FileManagerFiles400Error1> onFileManagerFiles400Error1, Action<RawError> otherwise)
    {
        if (TryGetFileManagerFiles400Error1(out var fileManagerFiles400Error1Value)) onFileManagerFiles400Error1(
            fileManagerFiles400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListFileManagerFilesError)} holds no value.");
    }

    private static Task<ListFileManagerFilesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<FileManagerFiles400Error1>().As(AsFileManagerFiles400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListFileManagerFilesError> Response { get; } = new(Create);
}
