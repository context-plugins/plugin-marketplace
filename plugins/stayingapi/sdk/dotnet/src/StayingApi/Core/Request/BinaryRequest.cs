using System.Net.Http;
using System.Net.Http.Headers;
using StayingApi.Core.Extensions;
using StayingApi.Core.Models;

namespace StayingApi.Core.Request;

internal sealed class BinaryRequest : IRequest
{
    private const string OctetStreamFallback = "application/octet-stream";

    private readonly BinaryContent? _binaryContent;
    private readonly string? _declaredMediaType;

    private BinaryRequest(BinaryContent? binaryContent, string? declaredMediaType)
    {
        _binaryContent = binaryContent;
        _declaredMediaType = declaredMediaType;
    }

    public static BinaryRequest Create(BinaryContent? binaryContent) =>
        new(binaryContent, null);

    public static BinaryRequest Create(BinaryContent? binaryContent, string declaredMediaType) =>
        new(binaryContent, declaredMediaType);

    public HttpContent Get()
    {
        if (_binaryContent is null) return HttpContent.None;

        var content = new StreamContent(new NonDisposingStream(_binaryContent.Stream));
        content.Headers.ContentType =
            _declaredMediaType is not null && _binaryContent.ContentType.MediaType == OctetStreamFallback
                ? new MediaTypeHeaderValue(_declaredMediaType)
                : _binaryContent.ContentType;
        if (_binaryContent.FileName is { } fileName)
            content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileNameStar = fileName,
            };
        return content;
    }

    public bool CanRetry => _binaryContent is null;
}
