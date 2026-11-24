using System;
using System.Net.Http.Headers;

namespace Crawl4Ai.Core.Models;

public sealed class ErrorByteContent
{
    public required ReadOnlyMemory<byte> Bytes { get; init; }
    public required string? FileName { get; init; }
    public required MediaTypeHeaderValue? ContentType { get; init; }
}
