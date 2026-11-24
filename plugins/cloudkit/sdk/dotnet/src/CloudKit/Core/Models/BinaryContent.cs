using System;
using System.IO;
using System.Net.Http.Headers;
#if NET6_0_OR_GREATER
using System.Threading.Tasks;
#endif

namespace CloudKit.Core.Models;

public sealed class BinaryContent : IDisposable
#if NET6_0_OR_GREATER
        , IAsyncDisposable
#endif
{
    public required Stream Stream { get; init; }
    public required string? FileName { get; init; }
    public required MediaTypeHeaderValue ContentType { get; init; }

    public void Dispose() => Stream.Dispose();

#if NET6_0_OR_GREATER
    /// <inheritdoc/>
    public async ValueTask DisposeAsync() => await Stream.DisposeAsync().ConfigureAwait(false);
#endif

    public static implicit operator BinaryContent(Stream stream) =>
        new()
        {
            Stream = stream,
            FileName = stream is FileStream fileStream ? Path.GetFileName(fileStream.Name) : null,
            ContentType = new MediaTypeHeaderValue("application/octet-stream")
        };

    public static implicit operator BinaryContent(byte[] bytes) =>
        new()
        {
            Stream = new MemoryStream(bytes),
            FileName = null,
            ContentType = new MediaTypeHeaderValue("application/octet-stream")
        };
}
