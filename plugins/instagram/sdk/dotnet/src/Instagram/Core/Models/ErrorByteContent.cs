using System;
using System.Net.Http.Headers;

namespace Instagram.Core.Models;

public sealed class ErrorByteContent
{
    public required ReadOnlyMemory<byte> Bytes { get; init; }
    public required string? FileName { get; init; }
    public required MediaTypeHeaderValue? ContentType { get; init; }
}
