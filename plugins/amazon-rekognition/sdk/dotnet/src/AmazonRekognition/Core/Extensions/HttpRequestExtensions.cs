using System.Collections.Generic;
using System.Net.Http.Headers;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Core.Extensions;

internal static class HttpRequestExtensions
{
    extension(HttpRequestHeaders requestHeaders)
    {
        public void AddRange(IReadOnlyCollection<HeaderParam> headers)
        {
            foreach (var header in headers)
                requestHeaders.Add(header.Key, ParameterFlattener.Flatten(header.Value));
        }
    }
}
