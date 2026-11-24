using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Core.Request;

internal sealed class FormRequest : IRequest
{
    private readonly IReadOnlyCollection<MultipartParam> _parts;

    private FormRequest(IReadOnlyCollection<MultipartParam> parts) => _parts = parts;

    public HttpContent Get()
    {
        var multipart = new MultipartFormDataContent();
        foreach (var part in _parts)
            multipart.AddPart(part);
        return multipart;
    }

    public bool CanRetry => !_parts.Any(p => p.Value is BinaryContent or IEnumerable<BinaryContent>);

    public static FormRequest Create(params IReadOnlyCollection<MultipartParam> parts) => new(parts);
}

file static class MultipartFormDataContentExtensions
{
    extension(MultipartFormDataContent multipart)
    {
        public void AddPart(MultipartParam part)
        {
            switch (part)
            {
                case { Key: null }:
                    multipart.AddTextParts(new Param(part.Value));
                    break;
                case { Value: null }:
                    break;
                case { Key: { } key, Value: BinaryContent file }:
                    multipart.AddFilePart(key, file);
                    break;
                case { Key: { } key, Value: IEnumerable<BinaryContent> files }:
                    foreach (var file in files)
                        multipart.AddFilePart(key, file);
                    break;
                case { Key: { } key, Value: { } value }
                    when part.ContentType.ToJsonMediaType() is { } mediaType:
                    multipart.AddJsonPart(key, value, mediaType);
                    break;
                case { Key: { } key, Value: { } value }:
                    multipart.AddTextParts(new Param(key, value));
                    break;
            }
        }

        private void AddFilePart(string name, BinaryContent file)
        {
            var fileContent = new StreamContent(new NonDisposingStream(file.Stream));
            fileContent.Headers.ContentType = file.ContentType;
            if (file.FileName is { } fileName)
                multipart.Add(fileContent, name, fileName);
            else
                multipart.Add(fileContent, name);
        }

        private void AddJsonPart(string name, object value, MediaTypeHeaderValue mediaType)
        {
            var json = JsonContent.Create(value, value.GetType());
            json.Headers.ContentType = mediaType;
            multipart.Add(json, name);
        }

        private void AddTextParts(Param param)
        {
            foreach (var field in ParameterFlattener.Flatten(param))
                multipart.AddTextPart(field.Key, field.Text);
        }

        private void AddTextPart(string name, string text)
        {
            var content = new StringContent(text);
            if (content.Headers.ContentType is { } contentType)
                contentType.CharSet = null;
            multipart.Add(content, name);
        }
    }

    extension(string? contentType)
    {
        private MediaTypeHeaderValue? ToJsonMediaType()
        {
            if (!MediaTypeHeaderValue.TryParse(contentType, out var parsed)
                || parsed.MediaType is not { } mediaTypeName)
                return null;

            var isJson = string.Equals(mediaTypeName, "application/json", StringComparison.OrdinalIgnoreCase)
                         || mediaTypeName.EndsWith("+json", StringComparison.OrdinalIgnoreCase);
            if (!isJson)
                return null;

            parsed.CharSet = null;
            return parsed;
        }
    }
}
